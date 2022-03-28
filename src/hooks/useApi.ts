import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.github.com/users/"
})

export const useApi = () => ({
    profile: async (login: string) => {
            const response = await api.get(`${login}`);
            return response.data
    },

    repos: async (login: string) => {
        const response = await api.get(`${login}/repos`);
        return response.data;
    },

    signout: async () => {
        window.location.href = '/';
    }
})