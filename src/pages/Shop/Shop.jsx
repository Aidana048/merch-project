import React, { useState } from 'react';
import './Shop.scss'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import btn from './кнопка.png'
import { useSelector, useDispatch } from 'react-redux';
import { deleteShop } from '../../store/shopSlice';


const Shop = () => {
    const [isVisible, setIsVisible] = useState(true);
    const { shop } = useSelector(state => state.shopSlice);
    const dispatch = useDispatch();

    const remove = (el) => {
        dispatch(deleteShop(el));
    };

    const parsePrice = (price) => {
        return Number(price.replace(/\s/g, '').replace('₴', ''));
    };

    const totalPrice = shop.reduce((sum, item) => {
        const itemTotal = parsePrice(item.price) * item.count;
        return sum + itemTotal;
    }, 0);

    if (!isVisible) return null;

    return (
        <div className='shop'>
            <span className='shop__cross' onClick={() => setIsVisible(false)}><RxCross1 /></span>
            <h2 className='shop__title'>Корзина</h2>
            {shop.map((el, index) => (
                <div key={index} className="shop__item">
                    <img src={el.image} alt="" className='shop__img' />
                    <button onClick={() => remove(el)}>X</button>
                    <div className="shop__inf">
                        <h3>{el.description}</h3>
                        <h4>{el.size}</h4>
                        <p>{el.price}</p>
                        <h2>Количество: {el.count}</h2>
                    </div>
                </div>
            ))}
            <div className="shop__sum">
                <h1>Сумма заказа: . . .</h1>
                <p>{totalPrice.toLocaleString()} ₴</p>
            </div>
            <Link to={'/placing'}>
                <img src={btn} alt="" className='shop__btn' />
            </Link>
        </div>
    );
};

export default Shop;