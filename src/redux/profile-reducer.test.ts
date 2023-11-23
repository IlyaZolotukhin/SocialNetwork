import profileReducer, {addPostActionCreator, deletePost, InitialStateType} from "./profile-reducer";
import {ProfileType} from "./Types";

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hello!", likesCount: 10},
        {id: 2, message: "GoodBuy!", likesCount: 20}],
    profile: null as ProfileType | null,
    status: ""
};

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator("apple")

    let newState:InitialStateType = profileReducer(initialState,action)

    expect (newState.posts.length).toBe(3)
})

it ('message of new posts should be correct', () => {
    let action = addPostActionCreator("apple")

    let newState:InitialStateType = profileReducer(initialState,action)

    expect (newState.posts[2].message).toBe("apple")
})

it ('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState:InitialStateType = profileReducer(initialState,action)

    expect (newState.posts.length).toBe(1)
})

