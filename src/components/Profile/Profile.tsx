import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/Types";
import {ProfileFormDataType} from "./ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    status: string
    profile: ProfileType | null
    isOwner: boolean
    setUserProfile: (profile: ProfileType) => void;
    updateStatus:(status: string) => void;
    savePhoto: (file: File) => void;
    saveProfile: (formData:ProfileFormDataType) => Promise<any>;
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;