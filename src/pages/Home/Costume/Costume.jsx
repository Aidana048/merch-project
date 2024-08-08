import React from 'react';
import './costume.scss'
import logo from './image/заголовок (1).png'
import one from './image/Rectangle 307.png'
import two from './image/Rectangle 308.png'
import three from './image/Rectangle 309.png'
import four from './image/Rectangle 310.png'
import  icon from './image/price_left.png'
const Costume = () => {
    return (
        <section className='costume'>
        <div className="costume__container container">
            <img src={logo} alt="" className='costume__logo' />
            <div className="costume__our">
                <div className="costume__image">
                    <div className="costume__icon">
                        <img src={icon} alt="" />
                        <h3>1 899 ₴ </h3>
                    </div>
                    <img src={one} alt="" />
                </div>
                <div className="costume__image">
                    <div className="costume__icon">
                        <img src={icon} alt="" />
                        <h3>1 899 ₴ </h3>
                    </div>
                    <img src={two} alt="" />
                </div>
                <div className="costume__image">
                    <div className="costume__icon">
                        <img src={icon} alt="" />
                        <h3>1 899 ₴ </h3>
                    </div>
                    <img src={three} alt="" />
                </div>
                <div className="costume__image">
                    <div className="costume__icon">
                        <img src={icon} alt="" />
                        <h3>1 899 ₴ </h3>
                    </div>
                    <img src={four} alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Costume;