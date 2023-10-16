import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type ReducersType = typeof reducers
export type RootStateType = ReturnType<ReducersType>

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;

export default store;