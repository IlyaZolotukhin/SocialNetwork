import {PostType, ProfileType} from "./Types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const initialState = {
    posts: [
        {id: 1, message: "Hello!", likesCount: 10},
        {id: 2, message: "GoodBuy!", likesCount: 20}],
    newPostText: "",
    profile: null as ProfileType | null,
    status: ""
};

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
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
        case "SET-STATUS":
            return {...state, status: action.status};
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(setStatus(status));
            }
        });
}

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetStatusACType = ReturnType<typeof setStatus>

export type ProfileReducerActionsType = AddPostACType | UpdateNewPostTextACType
    | setUserProfileACType | SetStatusACType

export default profileReducer;