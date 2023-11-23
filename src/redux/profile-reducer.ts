import {PostType, ProfileType} from "./Types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const initialState = {
    posts: [
        {id: 1, message: "Hello!", likesCount: 10},
        {id: 2, message: "GoodBuy!", likesCount: 20}],
    profile: null as ProfileType | null,
    status: ""
};

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        case "SET-STATUS":
            return {...state, status: action.status};
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText } as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE_POST', postId} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode == 0) {
                dispatch(setStatus(status));
            }
}

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export type SetStatusACType = ReturnType<typeof setStatus>
export type DeletePostType = ReturnType<typeof deletePost>

export type ProfileReducerActionsType = AddPostACType
    | setUserProfileACType | SetStatusACType | DeletePostType

export default profileReducer;