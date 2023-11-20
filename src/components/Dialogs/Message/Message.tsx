import React from "react";
import s from './../Dialogs.module.css'
import userPhoto from "../../assets/images/user.png";

type MessageType = {
    message: string
    id: number

}

const Message = (props:MessageType) => {
    return (
            <div className={s.messageBlock}>
                <div className={s.messageString}>{props.message}</div>
            <div className={s.triangle} ></div>
                <div> <img src={userPhoto}/></div>
            </div>

    );
}

export default Message;
