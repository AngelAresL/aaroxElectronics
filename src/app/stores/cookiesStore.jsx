import { create } from 'zustand';

export const useCookiesStore = create((set) => ({
  isAccept: false,
  acceptCookies: (value) => set({ isAccept: value }),
}));