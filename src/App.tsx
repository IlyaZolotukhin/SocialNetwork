import React, {FC} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch as Routes, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import SettingsContainer from "./components/Settings/SettingsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "../src/redux/app-reducer";
import {RootStateType} from "../src/redux/redux-store";
import Preloader from "../src/components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hooks/withSuspense";
import Error404 from "../src/components/Error/Error404";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type MapStatePropsType = {
    initialized: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

type AppPropsType = {
    initializeApp: () => void;
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent:any) => {
        alert(promiseRejectionEvent.reason.message)
        //console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route exact path='/' render={() => <Redirect to='/profile'/>} />
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path="/news" render={() => <NewsContainer/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <SettingsContainer/>}/>
                        <Route path="*" render={() => <Error404/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


const AppContainer = compose<FC>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = () => {
    return <Provider store={store}>
        <BrowserRouter basename={"SocialNetwork"}>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default SocialApp;