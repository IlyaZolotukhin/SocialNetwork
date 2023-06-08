import React from 'react';
import s from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={s.nav}>
           <ul>
               <li>Home</li>
               <li>Messages</li>
               <li>News</li>
               <li>Music</li>
               <li>Settings</li>
           </ul>
        </div>
    );
}

export default Navbar;