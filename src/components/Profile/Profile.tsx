import React from "react";
import s from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
}

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts = {props.state.posts}/>
        </div>
    );
}

export default Profile;