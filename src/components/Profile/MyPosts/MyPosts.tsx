import React from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
<div className={s.posts}>
    <Post message ='Привет' likesCount={10}/>
    <Post message ='Пока' likesCount={20}/>
</div>
        </div>
    );
}

export default MyPosts;