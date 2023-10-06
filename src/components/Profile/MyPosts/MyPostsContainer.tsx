import React, {ChangeEvent, FC} from "react";
import {
    addPostActionCreator,
    ProfileReducerActionsType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";

type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = ReturnType<typeof mapDispatchToProps>

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

const MyPostsContainer = compose<FC>(
    connect<MapStateType,MapDispatchType, {}, RootStateType>(mapStateToProps,mapDispatchToProps)
)(MyPosts);

export default MyPostsContainer;