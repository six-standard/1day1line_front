import { create } from "zustand";

type HookType = {
  element: JSX.Element | undefined;
  setModal: (data: JSX.Element) => void;
  removeModal: () => void;
};

export const useModal = create<HookType>((set) => ({
  element: undefined,
  setModal: (data: JSX.Element) => set({ element: data }),
  removeModal: () => set({ element: undefined }),
}));
