import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/Types";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../components/common/FormsControls/FormsControls";
import {maxLength50, required} from "../../utils/validators/validators";

type DialogsPropsType = {
    isAuth: boolean
    dialogsPage: DialogPageType
    addNewMessage: (formData: FormMessageDataType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

/*    console.log(props.isAuth)
    if (!props.isAuth) return <Redirect to={"/login"}/>;*/

    return (
        <div>
            <div className={s.content}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogsElements}
                    </div>
                    <div className={s.messages}>
                        <div>{messagesElements}</div>
                    </div>
                </div>

                <AddMessageFormRedux onSubmit={props.addNewMessage}/>
            </div>
        </div>
    );
}

export type FormMessageDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormMessageDataType>> = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'} name={'newMessageBody'} component={Textarea}
                           validate={[required,maxLength50]}/>
                </div>
                <button className={s.button}>Send</button>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormMessageDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
