import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    id: number;
    email: string;
    login: string;
    setAuthUserData: (id: number, email: string, login: string) => void;
    getAuthUserData: () => void;
    isAuth: boolean;
    logout: () => void;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
      this.props.getAuthUserData();
    }

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

export default compose<FC>(connect(mapStateToProps, {getAuthUserData, logout}))(HeaderContainer);
