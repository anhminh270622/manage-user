import create from 'zustand';
import { UserInput, UserUpdate } from '../type/users.type';
type ModalStore = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

type Store = {
    token: string;
    setToken: (token: string) => void;

    userLogin: UserInput;
    setUser: (userLogin: UserInput) => void;

    userUpdate: UserUpdate;
    setUserUpdate: (userUpdate: UserUpdate) => void;
}
export const useStore = create<Store>((set) => ({
    token: localStorage.getItem('token') || '',
    setToken: (token: string) => { set({ token }) },

    userLogin: { email: '', password: '' },
    setUser: (userLogin: UserInput) => set({ userLogin }),

    userUpdate: { name: '', job: 'it' },
    setUserUpdate: (userUpdate: UserUpdate) => set({ userUpdate })
}))

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false })
}));
