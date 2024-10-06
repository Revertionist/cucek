import { create } from "zustand";

const useNavStore = create((set) => ({
    isNavOpen: false,
    openNavBar: () => set((state) => ({ isNavOpen: true })),
    closeNavBar: () => set((state) => ({ isNavOpen: false })),
    toggleNavBar: () => set((state) => ({ isNavOpen: !state.isNavOpen }))
}))

export { useNavStore }