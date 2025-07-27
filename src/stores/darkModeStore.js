import { create } from "zustand";

const darkModeStore = create((set) => ({
  darkMode: false,
  isDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default darkModeStore;
