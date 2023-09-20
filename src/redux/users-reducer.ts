import {UsersType} from "./Types";

const initialState = {
    users: [
        {id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149452.png',
            followed: false, fullName: "Ilya", status: "study IT", location: { city: 'Novosibirsk', country: 'Russia'}},
        {id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/16/16341.png',
            followed: true, fullName: "Veronika", status: "work", location: { city: 'New York', country: 'USA'}},
        {id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/10/10938.png',
            followed: false, fullName: "Alina", status: "study", location: { city: 'Moscow', country: 'Russia'}},
        {id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/47/47774.png',
            followed: true, fullName: "Anton", status: "study", location: { city: 'Paris', country: 'France'}}
    ]
};

type InitialStateType = typeof initialState

const usersReducer = (state:InitialStateType = initialState, action:UserReducerActionsType):InitialStateType => {
    debugger;
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u =>u.id === action.userId ? {...u,followed: true}: u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u =>u.id === action.userId ? {...u,followed: false}: u)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UsersType[]) => ({type: 'SET_USERS', users} as const)

export type FollowACType =  ReturnType<typeof followAC>
export type UnfollowACType =  ReturnType<typeof unfollowAC>
export type SetUsersACType =  ReturnType<typeof setUsersAC>

export type UserReducerActionsType = FollowACType | UnfollowACType | SetUsersACType

export default usersReducer;