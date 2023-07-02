import React from "react";
import s from './Post.module.css';
import user from "../../../assets/images/user.png";

type MessageType = {
    message: string
    likesCount: number
}

const Post: React.FC<MessageType> = (props) => {
    console.log("post")
    return (
        <div className={s.item}>
            <img src={user} alt="user"/>
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>

    );
}

export default Post;