import s from './ProfileInfo.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void;
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

   const [editMode,setEditMode] = useState(false)
   const [status,setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true )
    }

    const deActivateEditMode = () => {
        setEditMode(false )
        props.updateStatus(status)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "no status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;