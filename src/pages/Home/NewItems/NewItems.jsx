import React from 'react';
import './NewItems.scss';
import n from './image/НОВИНКИ.png';
import one from './image/Rectangle 279.png';
import { useSelector } from 'react-redux';


const NewItems = () => {
    const {data}=useSelector(state=>state.productsSlice)
    return (
        <section className='NewItems'>
            <div className="NewItems__container container">
                <div className="NewItems__logo">
                    <img src={n} alt="" className='NewItems__news'/>
                </div>
                <div className="NewItems__items">
                    {data.filter((el)=>(
                        el.view === 'new'
                    )).map((el)=>(
                        <div key={el.id} className="NewItems__item">
                            <img src={el.image} alt="" />
                            <div className="NewItems__line"></div>
                            <div className="NewItems__description">
                            <div className="NewItems__image">
                                <img src={one} alt="" className="NewItems__product" />
                            </div>
                            <p>{el.description}</p>
                            <h3>{el.price}</h3>
                        </div>
                        </div>
                    ))}
                </div>

              
            </div>
        </section>
    );
};

export default NewItems;
