import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Settings: React.FC<SettingsPropsType> = ({isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.settings}>
            <h1>Settings</h1>
            <b>Change profile picture:</b> {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

        </div>
    )
}

export default Settings;