import { create } from "zustand";

type HookType = {
  section: Boolean;
  move: () => void;
};

export const useSection = create<HookType>((set) => ({
  section: false,
  move: () => set((state) => ({ section: !state.section })),
}));
