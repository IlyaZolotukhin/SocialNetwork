import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserReducerActionsType} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {UsersType} from "../../redux/Types";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
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
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;