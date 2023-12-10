import React, {FC} from 'react';
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import s from "./Login.module.css"
import {compose} from "redux";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormPropsType = {
    captchaUrl: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = ({handleSubmit,error,captchaUrl }) => {
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div className={s.checkbox}>
                <Field type={'checkbox'} name={'rememberMe'} component={"input"}/> remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} validate={[required]}/>}
            { error && <div className={s.formSummaryError}>{error}</div>}
            <div className={s.button}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({form: 'login'})(LoginForm)

export type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean,captcha: string) => void
    isAuth: boolean
    captchaUrl: string
}

const Login = (props:LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email,formData.password,formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.loginForm}>
       <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            <div>
                <div><b>test Email:</b><p>free@samuraijs.com</p></div>
                <div><b>test Password:</b><p>free</p></div>
            </div>
    </div>
    )
};

type mapStateToPropsType = {
    captchaUrl: string
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType):mapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default compose<FC>(connect(mapStateToProps, {login}))(Login);