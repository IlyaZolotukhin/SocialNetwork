import axios from "axios";
import {PhotoSizeType, ProfileType, ResponseType, UsersPageType} from "../redux/Types";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "672a3475-5358-46e1-b5c9-5ccc4db7abe6"}
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
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/ ` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/ ` + userId)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<ResponseType<{
            photos: PhotoSizeType
        }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileFormDataType) {
        return instance.put<ResponseType>(`profile`, profile)
    },
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


