import {RootStateType} from "../redux/redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStateType) => {
    return state.usersPage.users
}
//подклчаем библиотеку реселект и реализуем более сложную логику например фильтрацию
export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u=>true)
    })

export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}