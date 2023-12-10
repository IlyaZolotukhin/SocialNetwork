import React from "react";
import s from './Post.module.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import userPhoto from "../../../assets/images/userPhoto.png";
import {ProfileType} from "../../../../redux/Types";

type MessageType = {
    profile: ProfileType | null
    message: string
    likesCount: number
    id: number
    deletePost: (id: number) => void
}


const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            {/*<img src={user} alt="user"/>*/}
            <img src={props.profile?.photos?.large || userPhoto} alt={"user"} />
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