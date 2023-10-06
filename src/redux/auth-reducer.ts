import {AuthType} from "./Types";

type InitialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}

const initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
};

//reducers
const authReducer = (state:InitialStateType = initialState, action:authReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
            ...action.data, isAuth: true
            }

        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (id: number, email: string, login: string) => ({type: 'SET_USER_DATA', data: {id, email, login}} as const)

//action types
export type authReducerActionsType = ReturnType<typeof setAuthUserData>

export default authReducer;