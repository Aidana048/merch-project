import React from 'react';
import found from './10550.jpeg'
import './notfound.scss'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={found} alt="" className='notfound__img'/>
        </div>
    );
};

export default NotFound;