import React from 'react';
import './Collection.scss';
import col from './baner.png'

const Collection = () => {
    return (
        <section className='collection'>
            <div className="collection__container container">
                <div className="collection__image">
                    <img src={col} alt="collection" className="collection__photo" />
                </div>
            </div>
        </section>
    );
};

export default Collection;

