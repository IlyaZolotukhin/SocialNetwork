import React from 'react';

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