import { create } from 'zustand';

type LoadingState = {
  isLoading: boolean;
  message?: string;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  setLoading: (isLoading: boolean, message?: string) => void;
};

export const useLoading = create<LoadingState>((set) => ({
  isLoading: false,
  message: undefined,

  showLoading: (message?: string) => set({ isLoading: true, message }),

  hideLoading: () => set({ isLoading: false, message: undefined }),

  setLoading: (isLoading: boolean, message?: string) =>
    set({ isLoading, message: isLoading ? message : undefined }),
}));
