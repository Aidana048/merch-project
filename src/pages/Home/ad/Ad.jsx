import React from 'react';
import './Ad.scss'
import cat from './icon_отправка.png'
import obmen from './icon_обмен.png'
import im from './Group 330.png'
const Ad = () => {
    return (
        <section className='ad'>
            <div className="ad__container container">
            <div className="ad__our">
                <div className="ad__tovar">
                    <img src={cat} alt="" />
                    <div className="ad__info">
                        <h2>Отправка
                        день в день</h2>
                        <p>При заказе до 1800</p>
                    </div>
                </div>
                <div className="ad__tovar">
                    <img src={obmen} alt="" />
                    <div className="ad__info">
                        <h2>Легкий
                        возврат/обмен</h2>
                        <p>В течении 14 дней</p>
                    </div>
                </div>
                <div className="ad__tovar">
                    <img src={im} alt="" />
                    <div className="ad__info">
                        <h2>Сделано
                        в Украине</h2>
                        <p>Прям в Киеве</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Ad;