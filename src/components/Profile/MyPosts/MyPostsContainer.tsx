import React, {ChangeEvent} from "react";
import {
    addPostActionCreator,
    ProfileReducerActionsType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return{
        profilePage: state.profilePage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ProfileReducerActionsType>) => {
    return{
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e.currentTarget.value))},
        onAddPost: () =>{dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;