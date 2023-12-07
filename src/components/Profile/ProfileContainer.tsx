import React, {FC} from "react";
import Profile from "./Profile";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../redux/Types";
import {compose} from "redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileFormDataType} from "../Profile/ProfileInfo/ProfileDataForm";

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
    savePhoto: (file: File) => void;
    saveProfile: (formData:ProfileFormDataType) => Promise<any>;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId;

        if (!userId && this.props.autorizedUserId) {
            userId = this.props.autorizedUserId;
        }
        if(!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
      if(this.props.match.params.userId !== prevProps.match.params.userId){
         this.refreshProfile()
      }
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     isOwner = {!this.props.match.params.userId}
                     status={this.props.status}
                     setUserProfile={this.props.setUserProfile}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
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


export default compose<FC>(connect(mapStateToProps,
    {getUserProfile, getStatus, updateStatus, savePhoto,  saveProfile}), withRouter, withAuthRedirect)(ProfileContainer);