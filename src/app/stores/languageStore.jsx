import { create } from 'zustand';

export const useLanguageStore = create((set) => ({
  language: 'EN',
  toggleLanguage: () => set((state) => ({ language: state.language === 'EN' ? 'ES' : 'EN' })),
}));