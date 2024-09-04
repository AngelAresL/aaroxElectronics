import { create } from 'zustand';

export const useSideMenuStore = create((set) => ({
  menuActive: false,
  toggleActive: () => set((state) => ({ menuActive: !state.menuActive })),
}));