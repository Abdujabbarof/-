import { IGetUser } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TUser = {
  user: IGetUser | null;
  setUser: (newUser: IGetUser) => void;
};

const useUser = create<TUser>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newToken) =>
        set(() => ({
          user: newToken,
        })),
    }),
    {
      name: "myuser",
    }
  )
);

export default useUser;
