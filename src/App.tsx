import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState();

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile state={state.profilePage}
                                 dispatch={props.store.dispatch.bind(props.store)} />}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={state.dialogsPage}
                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/news" render={() => <News/> } />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() =><Settings />}/>
                </div>
            </div>
    );
}

export default App;
