import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onNewMessageChange: (e: ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateNewMessageBodyCreator(e.currentTarget.value))},
        onSendMessageClick: ()=>{ dispatch(sendMessageCreator()}
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
