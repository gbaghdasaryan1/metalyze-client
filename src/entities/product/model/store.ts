import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Draft } from 'immer';

type FilterOptions = {
  category: string;
  material: string;
  priceRange: string;
};

export type ProductFilterItem = {
  query: FilterOptions;
};

type ProductFilterActions = {
  setQuery: (query: FilterOptions) => void;
};

export const useCartStore = create<ProductFilterActions & ProductFilterItem>()(
  immer((set, get) => ({
    query: {
      category: '',
      material: '',
      priceRange: '',
    },
    setQuery: (query) =>
      set((state) => {
        state.query = query;
      }),
  }))
);

export default useCartStore;
