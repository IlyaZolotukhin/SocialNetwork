import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import s from "./Login.module.css"

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div className={s.checkbox}>
                <Field type={'checkbox'} name={'rememberMe'} component={"input"}/> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div className={s.button}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props:LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.loginForm}>
       <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div>
                <div><b>test Email:</b><p>free@samuraijs.com</p></div>
                <div><b>test Password:</b><p>free</p></div>
            </div>
    </div>
    )
};

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);