import React from 'react';
import s from './News.module.css';
import {Redirect} from "react-router-dom";

type NewsPropsType = {
    isAuth: boolean

}
const News = (props:NewsPropsType) => {

   // if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div>
            News
        </div>
    )
}

export default News;