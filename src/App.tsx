import React, {FC} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "../src/redux/app-reducer";
import {RootStateType} from "../src/redux/redux-store";
import Preloader from "../src/components/common/Preloader/Preloader";
import store from "./redux/redux-store";

type MapStatePropsType = {
    initialized: boolean
}

const mapStateToProps =(state: RootStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

type AppPropsType = {
    initializeApp: () => void;
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {

        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path="/news" render={() => <NewsContainer/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}



const AppContainer = compose<FC>(withRouter,connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = () => {
   return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default SocialApp;