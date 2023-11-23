import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "../redux/redux-store";
import {stopSubmit} from "redux-form";


/*type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}*/

const initialState = {
    id: null as null | number,
    email: "",
    login: "",
    isAuth: false
};

type InitialStateType = typeof initialState

//reducers
const authReducer = (state: InitialStateType = initialState, action: authReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) =>
    ({type: 'SET_USER_DATA', payload: {id, email, login, isAuth}} as const)

//thunk
export const getAuthUserData = (): AppThunk =>
    async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error!"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(0, "", "", false));
            }
}

//action types
export type authReducerActionsType = ReturnType<typeof setAuthUserData>

export default authReducer;