import React, {ChangeEvent} from "react";
import {DialogsReducerActionsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state: RootStateType) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<DialogsReducerActionsType>) => {
    return{
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateNewMessageBodyCreator(e.currentTarget.value))},
        onSendMessageClick: ()=>{ dispatch(sendMessageCreator())}
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
