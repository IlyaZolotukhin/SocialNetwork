import {FC} from "react";
import {
    addPostActionCreator,
    ProfileReducerActionsType
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts, {FormPostDataType} from "./MyPosts";
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
        addNewPost:(formData: FormPostDataType) => {
            console.log('akakakak')
            dispatch(addPostActionCreator(formData.newPostText))
        }
    }
}

const MyPostsContainer = compose<FC>(
    connect<MapStateType,MapDispatchType, {}, RootStateType>(mapStateToProps,mapDispatchToProps)
)(MyPosts);

export default MyPostsContainer;