import React, {FC} from "react";
import Profile from "./Profile";
import axios from "axios/index";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../redux/Types";
import {compose} from "redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     setUserProfile={this.props.setUserProfile}/>
        );
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})


export default compose<FC>(connect(mapStateToProps, {setUserProfile: setUserProfileAC}), withRouter)(ProfileContainer);