import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/userPhoto.png";
import {UserType} from "../../redux/Types";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    user: UserType;
    followingInProgress: number[],
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;

}

const User = (props: UsersPropsType) => {

    return (
        <div className={s.userCard}>
            <div className={s.userInfo} >
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={s.userPhoto} alt={'user'}/>
                    </NavLink>
                </div>

                <div className={s.name}>{props.user.name}</div>
                <div className={s.status}>{props.user.status}</div>

                <div>
                    {
                        props.user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>
                    }
                </div>
            </div>


            <div className={s.location}>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div>
        </div>
    )


};

export default User;