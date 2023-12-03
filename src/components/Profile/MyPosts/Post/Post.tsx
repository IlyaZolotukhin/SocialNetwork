import React from "react";
import s from './Post.module.css';
import user from "../../../assets/images/user.png";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
            <div className={s.postTools}>
                <span><ThumbUpAltOutlinedIcon  /> <b>{props.likesCount}</b></span>
                <span><ThumbDownOutlinedIcon fontSize="small"/></span>
                <span onClick={() => props.deletePost(props.id)}><DeleteForeverOutlinedIcon fontSize="small"/></span>
            </div>

        </div>

    );
}

export default Post;