import React, {FC} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    id: number;
    email: string;
    login: string;
    setAuthUserData: (id: number, email: string, login: string) => void;
    isAuth: boolean;
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Header id ={this.props.id}
                       email={this.props.email}
                       login={this.props.login}
                       setAuthUserData={this.props.setAuthUserData}
                       isAuth={this.props.isAuth}
        />

    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }}

export default compose<FC>(connect(mapStateToProps, {setAuthUserData}))(HeaderContainer);
