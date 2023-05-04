import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
