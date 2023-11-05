import {UserType} from "./Types";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type InitialStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

const initialState = {
    users: [
      /*  {id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149452.png',
            followed: false, fullName: "Ilya", status: "study IT", location: { city: 'Novosibirsk', country: 'Russia'}},
        {id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/16/16341.png',
            followed: true, fullName: "Veronika", status: "work", location: { city: 'New York', country: 'USA'}},
        {id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/10/10938.png',
            followed: false, fullName: "Alina", status: "study", location: { city: 'Moscow', country: 'Russia'}},
        {id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/47/47774.png',
            followed: true, fullName: "Anton", status: "study", location: { city: 'Paris', country: 'France'}}*/
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

//reducers
const usersReducer = (state:InitialStateType = initialState, action:UserReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u =>u.id === action.userId ? {...u,followed: true}: u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u =>u.id === action.userId ? {...u,followed: false}: u)}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

//action creators
export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', count: totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setCurrentPage(currentPage))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}

/*export const getChangedUsers = (pageNumber:number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setCurrentPage(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}*/

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

//action types
export type UserReducerActionsType = ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowingProgress>

export default usersReducer;