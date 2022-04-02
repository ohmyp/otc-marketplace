import React from 'react';
import instPath from '../images/icons/instagram.svg'
import twitterPath from '../images/icons/twitter.svg'
import discordPath from '../images/icons/discord.svg'

const Footer = () => {
  return (
    <div className="footer__border">
      <footer className='footer'>
        <div className="footer__text">
          <h5 className="footer__text-title">
            Our technical support is always online
          </h5>
          <p className="footer__text-text">
            Our team will always be happy to help you in case of various unclear situations. Our main goal is that everything goes well and you have only positive feelings about the transaction on our marketplace
          </p>

        </div>
        <div className="footer__socials">
          <p className="footer__socials-text">Join Us</p>
          <img className='footer__socials-icon' src={instPath} alt="instagram logo"/>
          <img className='footer__socials-icon' src={twitterPath} alt="twitter logo"/>
          <img className='footer__socials-icon' src={discordPath} alt="discord logo"/>
        </div>
      </footer>
    </div>

  );
}

export default Footer;
