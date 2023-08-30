import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {
    ProfilePageType
} from "../../../redux/store";

type PostsPropsType = {
    profilePage: ProfilePageType
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: () => void;
}

const MyPosts = (props: PostsPropsType) => {

    let onAddPost = () => {
        props.addPost();
    }
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={props.onPostChange} value={props.profilePage.newPostText}/>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;