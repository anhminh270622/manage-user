import create from 'zustand';

export const useToken = create((set) => ({
    token: localStorage.getItem('token'),
}))

export const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))

const useModalStore = create(set => ({
    isOpen: false,

    openModal: () => set({ isOpen: true }),

    closeModal: () => set({ isOpen: false })
}));
