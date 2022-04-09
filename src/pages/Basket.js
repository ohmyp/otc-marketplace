import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";

import imagePath from '../images/blvck.png'

const Basket = () => {
  return (
    <>
      <Header/>
      <section className='basket'>
        <h2 className="basket__title">basket</h2>
        <div className="backet__items">

          <div className="backet__item">
            <img className="backet__item-image" src={imagePath} alt="" />
            <div className="backet__item-text">
              <p className="backet__item-name">kraken secret society</p>
              <p className="backet__item-quality">quality: 1</p>
            </div>
            <p className="backet__item-cost">130$</p>
            <div className="backet__item-buttons">
              <button className="backet__item-button">+</button>
              <button className="backet__item-button black">-</button>
            </div>
          </div>

          <div className="backet__item">
            <img className="backet__item-image" src={imagePath} alt="" />
            <div className="backet__item-text">
              <p className="backet__item-name">kraken secret society</p>
              <p className="backet__item-quality">quality: 1</p>
            </div>
            <p className="backet__item-cost">130$</p>
            <div className="backet__item-buttons">
              <button className="backet__item-button">+</button>
              <button className="backet__item-button black">-</button>
            </div>
          </div>
          <button className="backet_button">buy</button>
        </div>
      </section>
      <Footer/>
    </>
   
  );
}

export default Basket;
