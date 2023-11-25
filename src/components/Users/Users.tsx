import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/Types";
import {Pagination, Stack} from "@mui/material";
import User from "./user";

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

        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
            props.onPageChanged(value)
        };

    return (
        <div className={s.container}>

            <div className={s.pages}>
                <Stack spacing={2}>
                    <Pagination count={props.totalUsersCount} page={props.currentPage} onChange={handleChange}
                                variant="outlined" shape="rounded"/>
                </Stack>
            </div>
            {
                props.users.map(u => <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                )
            }
        </div>
    )
};

export default Users;