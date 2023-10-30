import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import {UserType} from "../../redux/Types";
import {NavLink} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";

type UsersPropsType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followingInProgress: number[],
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
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        props.onPageChanged(value)
    };
    return (
        <div className={s.container}>
            <div className={s.pages}>

                <Stack spacing={2}>
                    {/*<Pagination count={10} shape="rounded" />*/}
                    <Pagination count={props.totalUsersCount} onChange={handleChange}  variant="outlined" shape="rounded"/>
                </Stack>

              </div>

                {/*<div className={s.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectPage : ""}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })
                }
            </div>*/}
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
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.unfollow(u.id)
                                                      }}>Unfollow</button>

                                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.follow(u.id)
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