import { create } from 'zustand';

export const useNotFoundStore = create((set) => ({
  notFound: false,
  setNotFound: (value) => set({ notFound: value }),
}));
