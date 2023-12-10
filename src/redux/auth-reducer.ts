import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "../redux/redux-store";
import {stopSubmit} from "redux-form";


/*type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}*/

const initialState = {
    id: 1,
    email: "",
    login: "",
    isAuth: false,
    captchaUrl: ""
};

type InitialStateType = typeof initialState

//reducers
const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
        case 'GET_CAPTCHA_URL_SUCCESS':
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

export const getCaptchaUrlSuccess = (captchaUrl: string) =>
    ({type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)


//thunk
export const getAuthUserData = (): AppThunk =>
    async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error!"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }

export const getCaptchaUrl = (): AppThunk =>
    async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, "", "", false));
    }
}

//action types
export type authReducerActionsType = ReturnType<typeof setAuthUserData>
export type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>

export type AuthReducerActionsType = authReducerActionsType | getCaptchaUrlSuccessType

export default authReducer;