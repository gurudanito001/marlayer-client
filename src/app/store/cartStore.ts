import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const existingIndex = state.cart.findIndex((item) => item.id === product.id);
        
        if (existingIndex > -1) {
          const newCart = state.cart.map((item, index) => 
            index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { cart: newCart };
        }
        
        return { 
          cart: [
            ...state.cart, 
            { 
              id: product.id, 
              name: product.name, 
              price: product.price, 
              image: product.image, 
              quantity: 1 
            }
          ] 
        };
      }),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map((item) => 
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
      })),

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'gadget-cart-storage', 
    }
  )
);