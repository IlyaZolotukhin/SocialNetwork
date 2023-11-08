import React, {FC} from 'react';
import {connect} from "react-redux";
import {
    followSuccess, getUsers, setCurrentPage, toggleFollowingProgress,unfollowSuccess
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {UserType} from "../../redux/Types";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

type UsersContainerPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setCurrentPage: (pageNumber: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    getChangedUsers: (pageNumber: number, pageSize: number) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader />  : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             onPageChanged={this.onPageChanged}
                                                             users={this.props.users}
                                                             follow={this.props.follow}
                                                             unfollow={this.props.unfollow}
                                                             followingInProgress={this.props.followingInProgress}
            />}

        </>

    }
}

export default compose<FC>(withAuthRedirect, connect(mapStateToProps, {
    follow: followSuccess,
    unfollow: unfollowSuccess,
    setCurrentPage,
    getUsers
}))(UsersContainer);