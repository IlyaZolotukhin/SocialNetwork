import {FC} from "react";
import {DialogsReducerActionsType, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs, {FormMessageDataType} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: RootStateType) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch<DialogsReducerActionsType>) => {
    return{
        addNewMessage: (formData: FormMessageDataType)=>{ dispatch(sendMessageCreator(formData.newMessageBody))}
    }
}

export default compose<FC>(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs);
