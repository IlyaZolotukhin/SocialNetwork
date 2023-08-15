import React from "react";
import s from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    }

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profilePage = {props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;