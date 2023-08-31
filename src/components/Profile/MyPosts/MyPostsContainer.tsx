import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {dispatch(updateNewPostTextActionCreator(e.currentTarget.value))},
        onAddPost: () =>{dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;