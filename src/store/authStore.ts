import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  setAuth: (auth: boolean, token?: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
  setAuth: (auth: boolean, token?: string) =>
    set({ isAuthenticated: auth, token }),
  logout: () => set({ isAuthenticated: false, token: null }),
}));
