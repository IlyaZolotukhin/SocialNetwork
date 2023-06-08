import React from "react";
import s from './Profile.module.css'
import town from "../assets/images/town.jpeg";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src={town} alt="town"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Profile;