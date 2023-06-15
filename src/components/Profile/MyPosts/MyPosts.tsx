import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <Post message ='Привет' likesCount={10}/>
            <Post message ='Пока' likesCount={20}/>
        </div>
    );
}

export default MyPosts;