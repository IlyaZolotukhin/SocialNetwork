import React from "react";
import Post from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {ProfilePageType} from "../../../redux/Types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength50, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../components/common/FormsControls/FormsControls";

type PostsPropsType = {
    profilePage: ProfilePageType
    addNewPost: (formData: FormPostDataType) => void;
    deletePost: (postId:number) => void
}

const MyPosts = React.memo((props: PostsPropsType) => {

    let postsElements = props.profilePage.posts.map(p =>
        <Post profile={props.profilePage.profile} id={p.id} deletePost={props.deletePost} message={p.message} likesCount={p.likesCount} key={p.id}/>)

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={props.addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
});

export type FormPostDataType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your post'} name={'newPostText'} component={Textarea}
                    validate={[required, maxLength50]}/>
                </div>
                <button>Add Post</button>
        </form>
    )
};
export const AddPostFormRedux = reduxForm<FormPostDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;