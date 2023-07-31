import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
}

const Dialogs = (props: DialogsPropsType) => {


    let newDialogElement = React.createRef<HTMLTextAreaElement>();

    let addDialog = () => {
        let text = newDialogElement.current?.value
        alert(text);
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.sendForm}>
                        <textarea ref={newDialogElement} className={s.textarea}></textarea>
                        <button onClick={addDialog} className={s.button}>Send</button>
                    </div>
                </div>


            </div>
        </div>

    );
}


export default Dialogs;
