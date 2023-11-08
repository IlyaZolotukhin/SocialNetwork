import React from "react";
import s from './Header.module.css'
import logo from "../assets/images/logo.png"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    id: number;
    email: string;
    login: string;
    setAuthUserData: (id: number, email: string, login: string) => void;
    isAuth: boolean
    logout: () => void;
}

const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                        : <NavLink to={'/login'}>Login</NavLink>}

                </div>
        </header>
    );
}


export default Header;
