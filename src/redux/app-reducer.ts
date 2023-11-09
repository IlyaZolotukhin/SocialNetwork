import {AppThunk} from "../redux/redux-store";
import {getAuthUserData} from "../redux/auth-reducer";

const initialState = {
    initialized: false
};

type InitialStateType = typeof initialState

//reducers
const appReducer = (state: InitialStateType = initialState, action: authReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,initialized:true
            }
        default:
            return state;
    }
}
//action creators
export const initializedSuccess = () =>({type: 'INITIALIZED_SUCCESS', } as const)

//thunk
export const initializeApp = (): AppThunk =>
    (dispatch) => {
    let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess())
        })

    }

//action types
export type authReducerActionsType = ReturnType<typeof initializedSuccess>

export default appReducer;