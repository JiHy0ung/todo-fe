import { create } from "zustand";
import { persist } from "zustand/middleware";

const darkModeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      isDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "dark-mode-storage" } // 새로고침 후에도 값을 사용하기 위해 persist 사용.
  )
);

export default darkModeStore;
