import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

import imagePath from '../images/blvck.png'
import bgPath from '../images/icons/order-bg.svg'

import Card from '../components/Card'

const Order = () => {
  return (
   <>
   <Header />
   <section className="order">
     <div className="order__item">

      <div className="order__card">
        <img src={bgPath} alt="" className="order__card-bg" />
        <div className="order__card-card">
          <img src={imagePath} alt="" className="order__card-img" />
          <h3 className="order__card-title">Blvck</h3>
          <p className="order__card-subtitle">Data about Discord, Email and phone number</p>
        </div>
       
      </div>

      <div className="order__info">
        <h2 className="order__info-title">blvck</h2>
        <p className="order__info-subtitle">Data about Discord, Email and phone number Data about Discord, Email and phone number Data about Discord, Email and phone number Data about Discord, Email and phone number</p>
        <h3 className="order__info-cost">$450,00 USDT</h3>
        <select name="" id="" className="order__info-button">
          <option value="">Select quantity</option>
          <option value="">Select quantity</option>
          <option value="">Select quantity</option>
        </select>
        <button className="order__info-button white">BUY</button>
        <button className="order__info-button">See more</button>
      </div>

     </div>

     <details className="order__more">
       <summary>
          More whitelists
       </summary>
       <div className='order__more-cards'>
        <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={imagePath}
        />
        <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={imagePath}
        />
        <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={imagePath}
        />
       </div>
      
     </details>
     

   </section>
   <Footer />
   </>
  );
}

export default Order;
