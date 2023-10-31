import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "e59f45c0-b15b-4904-8726-0da8edb82373"}
})

export const usersAPI = {
    getUsers(currentPage:number, pageSize: number){
       return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId:number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
       return  profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return  instance.get(`profile/ ` + userId)
    },
    getStatus(userId: string) {
        return  instance.get(`profile/status/ ` + userId)
    },
    updateStatus(status: string) {
        return  instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
me() {
    return instance.get(`auth/me`)
}
}


