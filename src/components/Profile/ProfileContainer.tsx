import React, {FC} from "react";
import Profile from "./Profile";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../redux/Types";
import {compose} from "redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    autorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void;
    getUserProfile: (userId: number) => void;
    getStatus: (userId: number) => void;
    updateStatus:(status: string) => void;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        const autorizedId = this.props.autorizedUserId;
        let userId = +this.props.match.params.userId;
        if (!userId && autorizedId) {
            userId = autorizedId;
        }
        if(!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     setUserProfile={this.props.setUserProfile}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})


export default compose<FC>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);