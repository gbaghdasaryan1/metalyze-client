import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type SearchState = {
  searchQuery: string;
};

type SearchActions = {
  setSearchQuery: (query: string) => void;
};

export const useSearchStore = create<SearchState & SearchActions>()(
  immer((set) => ({
    searchQuery: '',
    setSearchQuery: (query: string) =>
      set((state) => {
        state.searchQuery = query;
      }),
  }))
);
