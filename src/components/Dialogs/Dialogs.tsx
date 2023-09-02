import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/Types";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    onSendMessageClick:() => void
    onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div className={s.sendForm}>
                        <textarea value={newMessageBody}
                                       onChange={props.onNewMessageChange}
                                       placeholder='Enter your message'
                                       className={s.textarea}></textarea>
                        <button onClick={props.onSendMessageClick} className={s.button}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
