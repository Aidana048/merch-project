import React from 'react';
import './Footer.scss'
import logo from './image/logo (5).png'
import instagram from './image/Group.png'
import facebook from './image/016-facebook-logo 1.png'
import gir from './image/Ellipse 25.png'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__our">
                    <img src={logo} alt="" className='footer__logo'/>
                    <div className="footer__info">
                        <h3>ИНФО</h3>
                        <ul className='footer__ul'>
                            <li>Контакты</li>
                            <li>Система лояльности</li>
                            <li>Обмен и возврат</li>
                            <li>Доставка и оплата</li>
                        </ul>
                        <div className="footer__socc">
                            <a href="https://www.instagram.com/"><img src={instagram} alt="" className='footer__insta'/></a>
                            <a href="https://www.facebook.com/?locale=ru_RU">  <img src={facebook} alt="" className='footer__facebook' /></a>
                        </div>
                    </div>
                    <div className="footer__adres">
                        <h3 className='footer__adr'>АДРЕС</h3>
                        <ul className='footer__ul'>
                            <li>г.Киев, ул.Нижний Вал, 37</li>
                            <li>Пн-Вс: с 11:00 до 21:00</li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <h3>СОЦ.СЕТИ</h3>
                        <div className="footer__soc">
                            <a href="https://www.instagram.com/"><img src={instagram} alt="" className='footer__insta'/></a>
                            <a href="https://www.facebook.com/?locale=ru_RU">  <img src={facebook} alt="" className='footer__facebook' /></a>
                        </div>
                    </div>
                    <div className="footer__card">
                        <img src={gir} alt="" className='footer__photo'/>
                        <div className="footer__cards">
                            <p>Нам важно знать, <br />
что ты думаешь про нас! <br />
Просто напиши мне</p>
<a href="https://web.whatsapp.com/">НАПИСАТЬ ИВАНКЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;