import React, { useState } from 'react';
import './Placing.scss';
import contact from './заголоок контактные даные.png';
import dostavka from './заголоок контактные даные (1).png';
import oplata from './заголоок контактные даные (2).png';
import btn from './кнопка (1).png';
import { Link } from 'react-scroll';

const Placing = () => {
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const [deliveryOption, setDeliveryOption] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [confirmationOption, setConfirmationOption] = useState('');
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false); 

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleConfirmationChange = (e) => {
    setConfirmationOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Contact Data:', contactData);
    console.log('Delivery Option:', deliveryOption);
    console.log('Payment Option:', paymentOption);
    console.log('Card Number:', cardNumber);
    console.log('Confirmation Option:', confirmationOption);
        setIsOrderSubmitted(true);
  };

 

  return (
    <section className='placing'>
      <div className='placing__container container'>
        <div className='placing__section placing__contact'>
          <img src={contact} alt='Контактные данные' />
          <form>
            <label htmlFor='firstName'>
              <input type='text' id='firstName' name='firstName' placeholder='Имя' value={contactData.firstName} onChange={handleContactChange} />
            </label>
            <label htmlFor='lastName'>
              <input type='text' id='lastName' name='lastName' placeholder='Фамилия' value={contactData.lastName} onChange={handleContactChange} />
            </label>
            <label htmlFor='phoneNumber'>
              <input type='tel' id='phoneNumber' name='phoneNumber' placeholder='Номер телефона' value={contactData.phoneNumber} onChange={handleContactChange} />
            </label>
            <label htmlFor='email'>
              <input type='email' id='email' name='email' placeholder='Email' value={contactData.email} onChange={handleContactChange} />
            </label>
          </form>
        </div>
        <div className='placing__section placing__delivery'>
          <img src={dostavka} alt='Доставка' />
          <form>
            <div>
              <input type='radio' id='option1' name='deliveryOptions' value='option1' onChange={handleDeliveryChange} />
              <label htmlFor='option1'>Доставка в отделение Новой почты</label>
            </div>
            <div>
              <input type='radio' id='option2' name='deliveryOptions' value='option2' onChange={handleDeliveryChange} />
              <label htmlFor='option2'>Курьерская доставка Новой почты</label>
            </div>
            <div>
              <input type='radio' id='option3' name='deliveryOptions' value='option3' onChange={handleDeliveryChange} />
              <label htmlFor='option3'>Международная доставка</label>
            </div>
            <div>
              <input type='radio' id='option4' name='deliveryOptions' value='option4' onChange={handleDeliveryChange} />
              <label htmlFor='option4'>Самовывоз с нашего шоурума</label>
            </div>
          </form>
          <p>
            г.Киев, ул. Нижний вал, 37 <br />
            Ежедневно с 11:00 до 21:00
          </p>
        </div>
        <div className='placing__section placing__payment'>
          <img src={oplata} alt='Оплата' />
          <form>
            <div>
              <input type='radio' id='paymentOption1' name='paymentOptions' value='option1' onChange={handlePaymentChange} />
              <label htmlFor='paymentOption1'>Картой Visa / MasterCard</label>
            </div>
            <div>
              <input type='radio' id='paymentOption2' name='paymentOptions' value='option2' onChange={handlePaymentChange} />
              <label htmlFor='paymentOption2'>Наличкой при получении</label>
            </div>
            {paymentOption === 'option1' && (
              <label htmlFor='numCard'>
                <input type='text' id='numCard' name='numCard' placeholder='Номер карты' value={cardNumber} onChange={handleCardNumberChange} />
              </label>
            )}
          </form>
        </div>
        <div className='placing__confirmation'>
          <div>
            <input type='radio' id='noContact' name='confirmationOptions' value='noContact' onChange={handleConfirmationChange} />
            <label htmlFor='noContact'>Я уверена в заказе, со мной можно не связываться</label>
          </div>
          <Link to="#" onClick={handleSubmit}>
            <img src={btn} alt='Подтвердить' />
          </Link>
        </div>
      </div>

      {isOrderSubmitted && (
        <div className='placing__popup'>
          <div className='placing__popup-content'>
            <h2>Успешно принят ваш заказ</h2>
          </div>
        </div>
      )}
    </section>
  );
};
export default Placing;
