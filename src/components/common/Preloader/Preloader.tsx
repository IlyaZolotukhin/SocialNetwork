import s from './Preloader.module.css'

const Preloader = () => {
    return <div className={s.container}>
        <div className={s.loader}/>
    </div>
}

export default Preloader;





/*
import React from 'react';
import preloader from '../../assets/images/Eclipse-1s-200px.svg'

type PreloaderPropsType = {

}

const Preloader = () => {
   return <div>
      <img src={preloader}/>
   </div>
};

export default Preloader;

*/
