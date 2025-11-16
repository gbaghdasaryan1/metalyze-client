import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Draft } from 'immer';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  // allow extra fields from product shape
  [key: string]: any;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getCount: () => number;
};

export const useCartStore = create<CartState>()(
  immer((set, get) => ({
    items: [],

    addItem: (item: Omit<CartItem, 'quantity'>, quantity = 1) =>
      set((draft: Draft<CartState>) => {
        const idx = draft.items.findIndex((i) => i.id === item.id);
        if (idx >= 0) {
          draft.items[idx].quantity += quantity;
        } else {
          draft.items.push({ ...(item as any), quantity } as CartItem);
        }
      }),

    removeItem: (id: string) =>
      set((draft: Draft<CartState>) => {
        draft.items = draft.items.filter((i) => i.id !== id);
      }),

    updateQuantity: (id: string, quantity: number) =>
      set((draft: Draft<CartState>) => {
        const idx = draft.items.findIndex((i) => i.id === id);
        if (idx >= 0) {
          if (quantity <= 0) {
            draft.items.splice(idx, 1);
          } else {
            draft.items[idx].quantity = quantity;
          }
        }
      }),

    clearCart: () =>
      set((draft: Draft<CartState>) => {
        draft.items = [];
      }),

    getTotal: () => {
      return get().items.reduce<number>(
        (sum, it) => sum + it.price * it.quantity,
        0
      );
    },

    getCount: () => {
      return get().items.reduce<number>((sum, it) => sum + it.quantity, 0);
    },
  }))
);

export default useCartStore;
