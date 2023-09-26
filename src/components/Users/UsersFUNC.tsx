import React from 'react';
import {UserType} from "../../redux/Types";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../assets/images/user.png'

type UsersPropsType = {
    users: UserType[];
    follow: (userId:number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
}

const UsersFUNC = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }
   /* props.setUsers([
        {id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/149/149452.png',
            followed: false, fullName: "Ilya", status: "study IT",
            location: { city: 'Novosibirsk', country: 'Russia'}},
        {id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/16/16341.png',
            followed: true, fullName: "Veronika", status: "work",
            location: { city: 'New York', country: 'USA'}},
        {id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/10/10938.png',
            followed: false, fullName: "Alina", status: "study",
            location: { city: 'Moscow', country: 'Russia'}},
        {id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/47/47774.png',
            followed: true, fullName: "Anton", status: "study",
            location: { city: 'Paris', country: 'France'}}
    ])}*/

    return (
        <div className={styles.container}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    );
};

export default UsersFUNC;