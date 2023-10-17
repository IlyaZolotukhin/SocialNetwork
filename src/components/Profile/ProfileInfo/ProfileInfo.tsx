import React from "react";
import s from './ProfileInfo.module.css'
import town from "../../assets/images/town.jpeg";
import {ProfileType} from "../../../redux/Types";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void;
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <div>
                <img src={town} alt="town"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                </div>
                <div className={s.fullName}>
                    {props.profile.fullName}
                </div>
                <div className={s.aboutMe}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;