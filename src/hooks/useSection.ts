import { create } from "zustand";

type HookType = {
  section: Boolean;
  move: () => void;
};

export const useSection = create<HookType>((set) => ({
  section: true,
  move: () => set((state) => ({ section: !state.section })),
}));
