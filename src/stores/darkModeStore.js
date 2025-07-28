import { create } from "zustand";
import { persist } from "zustand/middleware";

const darkModeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      isDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "dark-mode-storage" }
  )
);

export default darkModeStore;
