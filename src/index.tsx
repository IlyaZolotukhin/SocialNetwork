import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {RootStateType} from "./redux/store";
import {Provider} from "react-redux";


let rerenderEntireTree =(state:RootStateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})
