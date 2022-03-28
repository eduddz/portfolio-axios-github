import { useState } from "react";
import { api, useApi } from "../hooks/useApi";
import { Project } from "../types/Project";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState<User | null>(null);
    const [project, setProject] = useState<Project[] | null>(null);

    const api = useApi()

    async function profile(login: string) {
        const data = await api.profile(login);
        if(data) {
            setUser(data);
        }
    }

    async function repos(login: string) {
        const data = await api.repos(login);
        if(data) {
            setProject(data);
        }
    }

    async function signout() { api.signout() }

    return (
        <AuthContext.Provider value={{ user, project, profile, repos, signout }}>
            { children }
        </AuthContext.Provider>
    )
}