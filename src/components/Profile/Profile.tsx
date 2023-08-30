import React from "react";
import s from '../Profile/Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
    }

const Profile = (props:ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;