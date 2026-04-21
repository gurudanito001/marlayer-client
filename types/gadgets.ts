import { z } from 'zod';

// 1. The Core Fields (Universal to all products)
const BaseGadgetSchema = z.object({
  sku: z.string().min(3, "SKU is required"),
  product_name: z.string().min(5, "Product name is required"),
  brand: z.string().min(1, "Brand is required"),
  stock_qty: z.number().int().nonnegative("Stock cannot be negative"),
  base_cost: z.number().nonnegative().optional().nullable(),
  selling_price: z.number().nonnegative().optional().nullable(),
  installment_price: z.number().nonnegative().optional().nullable(),
  description: z.string().min(10, "Description is required"),
  primary_image: z.string().url("Must be a valid image URL"),
});

// 2. Category-Specific Metafields (These will go into the 'specs' JSONB column)
const PhoneSpecsSchema = z.object({
  storage_capacity: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  battery_health: z.number().min(1).max(100).optional().nullable(),
  physical_condition: z.string(),
  network_status: z.string().optional().nullable(),
  biometrics: z.string().optional().nullable(),
});

const LaptopSpecsSchema = z.object({
  processor: z.string(),
  ram: z.string(),
  storage_drive: z.string(),
  screen_size: z.string(),
  graphics: z.string().optional().nullable(),
  battery_cycle_count: z.number().int().nonnegative().optional().nullable(),
});

const AccessorySpecsSchema = z.object({
  accessory_type: z.string(),
  compatibility: z.string(), // e.g., "iPhone 12/13/14 Series"
});

const OtherSpecsSchema = z.record(z.string(), z.any()); // Catch-all for dynamic key-value pairs

// 3. The Discriminated Union Route (Forces 'specs' to match the 'category')
export const GadgetSchema = z.discriminatedUnion("category", [
  BaseGadgetSchema.extend({
    category: z.literal("phones"),
    specs: PhoneSpecsSchema,
  }),
  BaseGadgetSchema.extend({
    category: z.literal("laptops"),
    specs: LaptopSpecsSchema,
  }),
  BaseGadgetSchema.extend({
    category: z.literal("accessories"),
    specs: AccessorySpecsSchema,
  }),
  BaseGadgetSchema.extend({
    category: z.literal("other"),
    specs: OtherSpecsSchema,
  }),
]);

// Export the type for Salome to use in her Next.js frontend forms
export type Gadget = z.infer<typeof GadgetSchema>;