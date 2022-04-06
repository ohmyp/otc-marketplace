import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import twitterPath from '../images/icons/twitter.svg'
import discordPath from '../images/icons/discord.svg'
import telegramPath from '../images/icons/telegram.svg'
import instPath from '../images/icons/instagram.svg'

import circlePath from '../images/icons/ligth_circle.svg'

const OurContacts = () => {
  return (
    <>
    <Header/>
    <section className='ourcontacts'>
      <h2 className="ourcontacts__title">our contacts</h2>
      <div className="ourcontacts__links">
        <img src={circlePath} alt="" className="ourcontacts__links-circle" />
        <a href="" className="ourcontacts__links-link top">
          <img src={twitterPath} alt="" />
        </a>
        <a href="" className="ourcontacts__links-link right">
          <img src={discordPath} alt="" />
        </a>
        <a href="" className="ourcontacts__links-link bottom">
          <img src={telegramPath} alt="" />
        </a>
        <a href='' className="ourcontacts__links-link left">
          <img src={instPath} alt="" />
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default OurContacts;
