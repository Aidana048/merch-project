import React from 'react';
import './Location.scss'
import photo from './image/Rectangle 47.png'
import boorivs from './image/BOORIVA STORE.png'
import icon from './image/Vector (2).png'
import heart from './image/Vector (1).png'
import zig from './image/Vector (3).png'
import a from './image/Vector (4).png'
import b from './image/Vector (5).png'
import loc from './image/Rectangle 88.png'



const Locationn = () => {
    return (
        <section className='location'>
            <div className="location__container container">
                <div className="location__image">
                    <img src={photo} alt="" className='location__photo' /> 
                </div>
                <div className="location__booriv">
                <img src={boorivs} alt="" className='location__booriva' />
                </div>
                <div className="location__icon">
                    <img src={icon} alt=""  className='location__s'/>
                    <img src={heart} alt="" className='location__heart' />
                    <img src={zig} alt="" className='location__zig' />
                    <img src={a} alt="" className='location__a' />
                    <img src={b} alt="" className='location__b' />
                </div>
               <div className="location__info">
                <p>г.Киев,  ул. Нижний вал, 37 Ежедневно с 11:00 до 21:00</p>
               </div>
               <div className="location__decs">
                <p>Ты можешь заказать примерку  понравившейся вещи или просто заглянуть, гуляя по Подолу, 
и примерять что-то 
из в наличии</p>
               </div>
               <div className="location__map">
                <img src={loc} alt="" className='location__loc' />
               </div>

            </div>
        </section>
    );
};

export default Locationn;