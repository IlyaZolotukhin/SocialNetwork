import React from "react";
import s from './ProfileInfo.module.css'
import town from "../../assets/images/town.jpeg";

function ProfileInfo() {
    return (
        <div className={s.profile}>
            <div>
                <img src={town} alt="town"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;