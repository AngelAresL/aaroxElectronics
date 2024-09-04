import { create } from 'zustand';

export const useFirstSesionStore = create((set) => ({
  firstSesion: true,
  toggleFirstSesion: (value) => set({ firstSesion: value }),
}));