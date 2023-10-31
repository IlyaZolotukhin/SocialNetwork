import React from "react";
import s from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/Types";

type ProfilePropsType = {
    status: string
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void;
    updateStatus:(status: string) => void;
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         setUserProfile={props.setUserProfile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;