import React from "react";
import s from './Profile.module.css'
import town from "../assets/images/town.jpeg";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src={town} alt="town"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;