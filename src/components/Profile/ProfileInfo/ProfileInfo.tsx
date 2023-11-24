import React from "react";
import s from './ProfileInfo.module.css'
import town from "../../assets/images/town.jpeg";
import {ProfileType} from "../../../redux/Types";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatuswithHooks";

type ProfileInfoPropsType = {
    status: string
    profile: ProfileType | null
    setUserProfile: (profile: ProfileType) => void;
    updateStatus:(status: string) => void;
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({status, profile, setUserProfile, updateStatus,}) => {
    if (!profile){
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <div>
                <img src={town} alt="town"/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                </div>
                <div className={s.fullName}>
                    {profile.fullName|| "no name"}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={s.aboutMe}>
                    <p><b>about me: </b> {profile.aboutMe || "no information" }</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;