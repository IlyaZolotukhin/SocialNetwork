import React from "react";
import Profile from "./Profile";

type ProfileContainerPropsType = {

}

class ProfileContainer extends React.Component<ProfileContainerPropsType, any>{
    render() {
        return (
                <Profile {...this.props}/>
        );
    }
}

export default ProfileContainer;