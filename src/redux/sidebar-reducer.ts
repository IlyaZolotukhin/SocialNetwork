import {SidebarType} from "./Types";

const initialState: SidebarType = {}

type InitialStateType = typeof initialState

const sidebarReducer = (state:InitialStateType = initialState, action:SidebarReducerActionsType) => {

    return state;
}

export type SidebarReducerActionsType ={}

export default sidebarReducer;