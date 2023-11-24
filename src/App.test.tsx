import ReactDOM from "react-dom";
import SocialApp from "./App";
import React from "react";

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <SocialApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});