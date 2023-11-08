import {FC} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import News from "../News/News";

let mapStateToProps = (state: RootStateType) => {
    return{
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return{

    }
}

export default compose<FC>(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(News);
