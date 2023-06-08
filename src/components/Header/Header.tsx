import React from "react";
import s from './Header.module.css'
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <header className={s.header}>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

        </header>
    );
}


export default Header;
