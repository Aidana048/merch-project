import React from 'react';
import './Insta.scss'
import instagram from './image/Instagram.png'
import one from './image/Rectangle 94.png'
import two from './image/Rectangle 93.png'
import three from './image/Rectangle 89.png'
import four from './image/Rectangle 90.png'
import five from './image/Rectangle 91.png'
const Insta = () => {
    return (
        <section className='insta'>
            <div className="insta__container container">
                <div className="insta__our">
                <div className="insta__left">
                <img src={instagram} alt="" />
                <p>Мы в экстазе, когда ты нас отмечаешь <br />
                Отмечай нас чаще</p>
                <div className="insta__card">
                <img src={one} alt=""  className='insta__one'/>
                <img src={two} alt="" className='insta__two' />
                </div>
                </div>
                <img src={three} alt="" className='insta__three'/>
                <div className="insta__right">
                    <div className="insta__card">
                        <img src={four} alt="" className='insta__four' />
                        <img src={five} alt=""  className='insta__five'/>
                    </div>
                    <h2>#boorivagirls </h2>
                    <p>Ставь тэг чтобы быть в нашей <br />
                    тусовке.</p>
                
                </div>
                </div>
             
            

            </div>
        </section>
    );
};

export default Insta;