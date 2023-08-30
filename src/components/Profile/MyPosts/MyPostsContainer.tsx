import React, {ChangeEvent} from "react";
import {
    ActionsTypes,
    ProfilePageType, StoreType
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type PostsPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: PostsPropsType) => {

    const state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (<MyPosts profilePage={state.profilePage} onPostChange={onPostChange} addPost={addPost}/>);
}

export default MyPostsContainer;