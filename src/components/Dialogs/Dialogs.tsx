import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../App";

type DialogsPropsType = {
    dialogsPage: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>

            </div>
        </div>

    );
}


export default Dialogs;
