import React, {FC} from 'react';
import {connect} from "react-redux";
import {
    follow,
    followSuccess,
    requestUsers,
    setCurrentPage,
    unfollow,
    unfollowSuccess
} from "../../redux/users-reducer";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {UserType} from "../../redux/Types";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount,
    getFollowingInProgress, getUsers} from "../../redux/users-selectors";


let mapStateToProps = (state: RootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
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

export default compose<FC>(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: requestUsers
}))(UsersContainer);