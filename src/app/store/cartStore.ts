import { create } from 'zustand';

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
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existingIndex = state.cart.findIndex((item) => item.id === product.id);
    
    if (existingIndex > -1) {
      const newCart = [...state.cart];
      newCart[existingIndex].quantity += 1;
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
  clearCart: () => set({ cart: [] }),
}));