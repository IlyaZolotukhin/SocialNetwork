import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import ProfileDataForm, {ProfileFormDataType} from "../Profile/ProfileInfo/ProfileDataForm";
import {ProfileType} from "../../redux/Types";

type SettingsPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileFormDataType) => Promise<any>;
}

const Settings: React.FC<SettingsPropsType> = ({isOwner, savePhoto, profile, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        });
    }

    return (
        <div className={s.settings}>
            <h1>Settings</h1>
            <div><b>Change profile picture: </b> {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>

            <div><b>Change profile items: </b>{isOwner && <button onClick={() => {
                setEditMode(true)
            }}>edit</button>}
                {profile && editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : null}
            </div>
        </div>
    )
}

export default Settings;