import axios from "axios";
import {ProfileType, ResponseType, UsersPageType} from "../redux/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e59f45c0-b15b-4904-8726-0da8edb82373"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersPageType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/ ` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/ ` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number; email: string; login: string }>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe=false) {
        return instance.post<ResponseType<{ userId: number}>>(`auth/login`, {email, password, rememberMe} )
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    },
}


