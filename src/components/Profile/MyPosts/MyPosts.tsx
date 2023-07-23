import React from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'

let posts = [
    {id: 1, message: "Hello!", likesCount: 10},
    {id: 2, message: "GoodBuy!", likesCount: 20}
]

type MyPostsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = () => {

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;