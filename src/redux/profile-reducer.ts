import {PostType} from "./Types";

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hello!", likesCount: 10},
        {id: 2, message: "GoodBuy!", likesCount: 20}]
};

type InitialStateType = typeof initialState

const profileReducer = (state:InitialStateType = initialState, action:ProfileReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export type AddPostACType =  ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextACType =  ReturnType<typeof updateNewPostTextActionCreator>
export type ProfileReducerActionsType = AddPostACType | UpdateNewPostTextACType

export default profileReducer;