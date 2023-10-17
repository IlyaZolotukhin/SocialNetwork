import React, {ChangeEvent, FC} from "react";
import {DialogsReducerActionsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = compose<FC>(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs);

export default DialogsContainer;
