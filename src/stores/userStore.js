import { create } from "zustand";

const userStore = create((set) => ({
  userName: null,
  setUserName: (userName) => set({ userName }),
}));

export default userStore;
