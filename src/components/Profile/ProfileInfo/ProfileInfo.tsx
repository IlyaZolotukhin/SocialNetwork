import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/Types";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatuswithHooks";
import ProfileDataForm, {ProfileFormDataType} from "../../Profile/ProfileInfo/ProfileDataForm";

type ProfileInfoPropsType = {
    status: string
    profile: ProfileType | null
    isOwner: boolean
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileFormDataType) => Promise<any>;
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         status, profile,
                                                         updateStatus, isOwner, savePhoto, saveProfile
                                                     }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    /*    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
                savePhoto(e.target.files[0])
            }
        }*/

    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            });
    }

    return (
        <div className={s.profile}>

            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos?.large || userPhoto}/>
                    {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData status={status} updateStatus={updateStatus} goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
}

type ProfileDataProps = {
    goToEditMode: () => void;
    profile: ProfileType | null
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void;
}

const ProfileData: React.FC<ProfileDataProps> = ({status, updateStatus, profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={s.fullName}>
            {profile?.fullName || "no name"}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div>
            <b>Looking for a job:</b> {profile?.lookingForAJob ? "yes" : "no"}
        </div>
        {profile?.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile?.lookingForAJobDescription}
            </div>
        }
        <div className={s.aboutMe}>
            <b>About me:</b> {profile?.aboutMe || "no information"}
        </div>
        <div>
            <b>Contacts:</b> {
            profile &&
            Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
        </div>

    </div>
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;