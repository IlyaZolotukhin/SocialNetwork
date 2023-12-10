import {PhotoSizeType, PostType, ProfileType} from "./Types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";


const initialState = {
    posts: [
        {id: 1, message: "Hello!", likesCount: 10},
        {id: 2, message: "GoodBuy!", likesCount: 20}],
    profile: null as unknown as ProfileType,
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
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const deletePost = (postId: number) => ({type: 'DELETE_POST', postId} as const)
export const savePhotoSuccess = (photos: PhotoSizeType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)

export const getUserProfile = (userId: number): AppThunk => async (dispatch) => {
    try {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    } catch (e: any) {
        alert(e.message)
    }
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileFormDataType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
}

export type AddPostACType = ReturnType<typeof addPostActionCreator>
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export type SetStatusACType = ReturnType<typeof setStatus>
export type DeletePostType = ReturnType<typeof deletePost>
export type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

export type ProfileReducerActionsType = AddPostACType
    | setUserProfileACType | SetStatusACType | DeletePostType | savePhotoSuccessType

export default profileReducer;