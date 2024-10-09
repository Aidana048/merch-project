import React, { useEffect, useState } from 'react';
import './header.scss'
import inf from './image/контакты.png'
import logo from './image/logo (4).png'
import like from './image/akar-icons_heart.png'
import shop from './image/akar-icons_shopping-bag.png'
import line from './image/Rectangle 163.png'
import { Link, useNavigate } from 'react-router-dom';
import { PiUserCircle } from "react-icons/pi";
import { PiUserCircleCheck } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from '../../store/userRegis';
import {animateScroll} from "react-scroll";
import BurgerMenu from './burgerMenu/BurgerMenu';





const Header = () => {

   const dispatch=useDispatch()
   const navigate=useNavigate()
   const toTop = () => {
    
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0,
        smooth:true
    })
    navigate('/')
};
    const {user} = useSelector(state=>state.user)
    const shopList = useSelector(state => state.shopSlice.shop.reduce((acc, rec) => acc + rec.count , 0))

    return ( 
        <header className='header'>
        <div className="header__container container">
           <div className="header__top">
            <img src={inf} alt="" className='header__inf'/>
            <div className="header__logo">
                <Link to={'/'}>
                <img src={logo} alt="" />
                </Link>
            </div>
            <Link to='/favourite' className='sm-hide'><img src={like} alt="" className='header__favourite'/></Link>  
            <Link to={'/shop'}>
            <img src={shop} alt="" className='header__shop'/>
            <span className='header__shoplist'>{shopList}</span>
            </Link> 
            <div className="burger">
                <BurgerMenu/> 
            </div>  
            
            
            <p className='sm-hide'>{user?.name}</p>

              
             <span className='header__user sm-hide'>{user.name?
             <PiUserCircleCheck />:
             <Link to="/register">  
                <PiUserCircle />
                </Link>
                 }</span>
                 
            {user.name? <button className='sm-hide' onClick={()=>dispatch(logOut())}>Выход</button>
            :""}
            
         
           </div>
        
            <ul className='header__category'>
                <Link to={'/'}>
                <li onClick={()=>{
                   toTop()
                }} > НОВИНКИ</li>
                </Link>
                <Link to={'/platya'}>
                <li onClick={()=>{toTop()}}>ПЛАТЬЯ</li>
                </Link>
                
                <Link to={'/category'}>
                <li onClick={()=>{toTop()}} > ВЕРХ</li>
                </Link>
                <Link to={'/bottomCloth'}>
                <li onClick={()=>{toTop()}}>НИЗ</li>
                </Link> 
                <Link to={'/jackets'}>
                <li onClick={()=>{toTop()}}>КУРТКИ</li>
                </Link>               
                <Link to={'/costume'}>
                <li onClick={()=>{toTop()}}>КОСТЮМЫ</li>
                </Link>
                
                <li>#BOORIVAGIRL</li>
            </ul>
    
        <img src={line} alt="" className='header__line'/>
        </div>
    </header>
    
    );
};

export default Header;