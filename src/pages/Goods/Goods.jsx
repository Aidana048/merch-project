import React, { useEffect, useState } from 'react';
import './Goods.scss'
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToShop } from '../../store/shopSlice';
const Goods = (el) => {
    const [size,setSize] = useState('')

    const changeSize = (e)=>{
        setSize(e.target.value)
    }


    const dispatch=useDispatch()
    const add =(obj)=>{
        dispatch(addToShop(obj))
    }


    const location =useLocation()
    const id =location.pathname.split('/').at(-1)

    const [one, setOne]=useState({})


        useEffect(()=>{
            axios(`http://localhost:9090/products/${id}`)
            .then(({data})=>setOne(data))
        },[])



    return (
        <section className='goods'>
            <div className="goods__container container">
            <div className="goods__top">
                <div className="goods__image">
                    <img src={one.image} alt="" className='goods__img'/>
                </div>
                <div className="goods__info">
                    <h2>{one.title}</h2>
                    <h3>{one.price}</h3>
                    <p>Выбрать размер:</p>
                    <div className="goods__size">
                        {/* <button>XS-S</button>
                        <button>S-M</button>
                        <button>M-L</button>
                        <button>L-XL</button> */}

                    
                        <select onChange={(e)=>changeSize(e)} name="" id="">
                        <option  value="XS">XS</option>
                        <option  value="S">S</option>

                        <option value="M">M</option>

                        <option  value="L">L</option>

                       </select>
                    </div>
                    <button onClick={()=>add({...one,count:1,targetSize:size})}  className='goods__shop'>В корзину</button>
                    <p>{one.description}</p>
                    <Link to={'/pagesize'}>
                    <button className='goods__sizing'>Таблица размеров</button>

                    </Link>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Goods;