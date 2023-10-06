import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import {UserType} from "../../redux/Types";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    onPageChanged: (pageNumber: number) => void;
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>
            {
                props.users.map(u =>
                    <div className={s.userCard} key={u.id}>
                        <div className={s.userInfo}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.userPhoto}/>
                                </NavLink>
                            </div>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {"API-KEY": "e59f45c0-b15b-4904-8726-0da8edb82373"}
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                });

                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {"API-KEY": "e59f45c0-b15b-4904-8726-0da8edb82373"}
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                });
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
            }
        </div>
    )
};

export default Users;