import { create } from "zustand";
import { CreatedUser } from "../../types/createdUser.types";

interface CreatedUserStore {
  createdUsers: CreatedUser[];
  setCreatedUsers: (users: CreatedUser[]) => void;
  addCreatedUser: (user: CreatedUser) => void;
  removeCreatedUser: (userId: number) => void;
}

export const useCreatedUserStore = create<CreatedUserStore>((set) => ({
  createdUsers: [],
  setCreatedUsers: (users) => set({ createdUsers: users }),
  addCreatedUser: (user) =>
    set((state) => ({ createdUsers: [...state.createdUsers, user] })),
  removeCreatedUser: (userId) =>
    set((state) => ({
      createdUsers: state.createdUsers.filter((user) => user.id !== userId),
    })),
}));
