import React, {FC} from "react";
import Settings from "../../components/Settings/Settings";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {savePhoto, saveProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileType} from "../../redux/Types";
import {ProfileFormDataType} from "../Profile/ProfileInfo/ProfileDataForm";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    savePhoto: (file: File) => void;
    saveProfile: (formData:ProfileFormDataType) => Promise<any>;
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class SettingsContainer extends React.Component<PropsType> {

    render() {

        return (
            <Settings
                     isOwner = {!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     profile={this.props.profile}
                     saveProfile={this.props.saveProfile}
            />
        );
    }
}


let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,

})


export default compose<FC>(connect(mapStateToProps,
    {savePhoto, saveProfile}), withRouter, withAuthRedirect)(SettingsContainer);