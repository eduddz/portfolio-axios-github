import { createContext } from "react";
import { Project } from "../types/Project";
import { User } from "../types/User";

export type AuthContextType = {
    user: User | null;
    project: Project[] | null;
    profile: (login: string) => {};
    repos: (repo: string) => {};
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);