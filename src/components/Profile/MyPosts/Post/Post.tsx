import React from "react";
import s from './Post.module.css';
import user from "../../../assets/images/user.png";

type MessageType = {
    message: string
    likesCount: number
    id: number
    deletePost: (id: number) => void
}


const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img src={user} alt="user"/>
            {props.message}
            <div>
                <span>like <b>{props.likesCount}</b></span>
                <span onClick={() => props.deletePost(props.id)}>Delete Post</span>
            </div>

        </div>

    );
}

export default Post;