import React from 'react';
import './Products.scss'
import photo from './image/фото.png'
import line from './image/Vector 220 (1).png'
import photo2 from './image/фото (1).png'
import ban from './image/банер.png'
import photos from './image/Rectangle 279 (4).png'



const Products = () => {
    return (
        <section className='product'>
            <div className="product__container container">
                <div className="product__our">

                    <div className="product__left">
                        <img src={photo} alt="" />
                        <img src={line} alt="" />
                        <div className="product__info">
                            <p>Бомбер Gone Crazy хаки</p>
                            <h3>2 499₴</h3>
                        </div>

                        <img src={photo2} alt="" />
                        <img src={line} alt="" />
                        <div className="product__info">
                            <p>Бомбер Gone Crazy хаки</p>
                            <h3>899 ₴</h3>
                        </div>
                    </div>

                    <div className="product__banner">
                        <img src={ban} alt="" />
                    </div>

                    <div className="product__right">
                        <img src={photos} alt="" />
                        <img src={line} alt="" />
                        <div className="product__info">
                            <p>Платье прозрачное
                            в цветочек черное</p>
                            <h3>1 299 ₴</h3>
                        </div>
                    </div>

                     



                </div>



            </div>
        </section>
    );
};

export default Products;