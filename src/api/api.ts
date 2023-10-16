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
  /*  getChangedUsers(pageNumber:number, pageSize: number){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },*/

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
       return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
    },
}
export const authAPI = {

}


