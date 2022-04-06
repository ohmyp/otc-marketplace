import React from 'react';
import iconPath from '../images/icons/metamask.svg'


const Liked = () => {
  return (
  <div className='liked'>
    <div className="liked__line">
      <div className="liked__info">
        <img className='liked__info-icon' src={iconPath} alt="" />
      </div>
      <p className="liked__text">
        Shinsekai
        <br />
        130$
      </p>
    </div>
    <div className="liked__line">
      <div className="liked__info">
        <img className='liked__info-icon' src={iconPath} alt="" />
      </div>
      <p className="liked__text ">
        Warriors of Ankh
        <br />
        130$
      </p>
    </div>
  </div>
  );
}

export default Liked;
