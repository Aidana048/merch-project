import React from 'react';
import './Banner.scss'
import tshirt from './image/футболки.png'
import dress from './image/платья.png'
import costums from './image/костюмы.png'
import bott from './image/низ.png'
import topp from './image/верх.png'
import hoodie from './image/худи.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner__container container">
                <div className="banner__row">
                    <div className="banner__item">
                        <img src={tshirt} alt="Футболки" />
                    </div>
                    <div className="banner__item">
                        <img src={dress} alt="Платья" />
                    </div>
                    <div className="banner__item">
                        <img src={costums} alt="Костюмы" />
                    </div>
                </div>
                <div className="banner__row">
                    <div className="banner__item">
                        <img src={bott} alt="Низ" />
                    </div>
                    <div className="banner__item">
                        <img src={topp} alt="Верх" />
                    </div>
                    <div className="banner__item">
                        <img src={hoodie} alt="Худи" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
