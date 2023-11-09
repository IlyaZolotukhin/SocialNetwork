import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    id: number;
    email: string;
    login: string;
    setAuthUserData: (id: number, email: string, login: string) => void;
    isAuth: boolean;
    logout: () => void;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {



    render() {
        return <Header id ={this.props.id}
                       email={this.props.email}
                       login={this.props.login}
                       setAuthUserData={this.props.setAuthUserData}
                       isAuth={this.props.isAuth}
                       logout={this.props.logout}
        />

    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }}

export default compose<FC>(connect(mapStateToProps, {logout}))(HeaderContainer);
