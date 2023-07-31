import React from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {PostType} from "../../../redux/state";

type PostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: PostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        /*let text = newPostElement.current?.value
        alert(text);*/
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;