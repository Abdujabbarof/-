import { create } from "zustand";
import { persist } from "zustand/middleware";

type TToken = {
  token: string;
  setToken: (newToken: string) => void;
};

const useToken = create<TToken>()(
  persist(
    (set) => ({
      token: "",
      setToken: (newToken: string) =>
        set(() => ({
          token: newToken,
        })),
    }),
    {
      name: "token",
    }
  )
);

export default useToken;
