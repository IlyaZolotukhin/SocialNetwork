import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchType = {}

let mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component: FC<T>) {

    const RedirectComponent = (props:MapStatePropsType) => {

        let {isAuth,  ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} key="something_key"/>

    }

    return  connect<MapStatePropsType, MapDispatchType, T, RootStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)
}
