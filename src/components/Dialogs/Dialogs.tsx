import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionsTypes,
    DialogPageType
} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value));
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.state.newMessageBody;

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
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'
                                       className={s.textarea}></textarea>
                        <button onClick={onSendMessageClick} className={s.button}>Send</button>
                    </div>
                </div>


            </div>
        </div>

    );
}


export default Dialogs;
