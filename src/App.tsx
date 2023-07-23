import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

export type DialogType ={
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

let state: RootStateType = {
    profilePage: {
        posts:[]
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: "Ilya"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],

        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "ok"},
            {id: 4, message: "ok"},
            {id: 5, message: "ok"}
        ]
    }
}

const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/> } />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() =><Settings />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
