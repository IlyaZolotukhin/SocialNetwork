import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

const DialogItem = (props:DialogItemType) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    );
}

type MessageType = {
    message: string
}

const Message = (props:MessageType) => {
    return (
            <div className={s.dialog}>{props.message}</div>

    );
}

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Ilya" id="1"/>
                    <DialogItem name="Dima" id="2"/>
                    <DialogItem name="Andrey" id="3"/>
                    <DialogItem name="Sveta" id="4"/>
                    <DialogItem name="Viktor" id="5"/>
                    <DialogItem name="Valera" id="6"/>
                </div>
                <div className={s.messages}>
                    <Message message="jnghngvngh"/>
                    <Message message="hmgjmgmghkmj"/>
                    <Message message=".kl.k.kl"/>
                </div>

            </div>
        </div>

    );
}


export default Dialogs;
