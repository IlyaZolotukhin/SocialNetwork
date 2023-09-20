import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

type ReducersType = typeof reducers
export type RootStateType = ReturnType<ReducersType>

const store = legacy_createStore(reducers)

// @ts-ignore
window.store = store;

export default store;