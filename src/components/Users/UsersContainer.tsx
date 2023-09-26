import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC, setCurrentPageAC,
    setCurrentPageACType, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserReducerActionsType
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {UserType} from "../../redux/Types";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<UserReducerActionsType>) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;