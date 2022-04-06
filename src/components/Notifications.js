import React from 'react';
import iconPath from '../images/icons/metamask.svg'

const Notifications = () => {
  return (
    <div className='notifications'>
      <div className="notifications__line">
        <p className="notifications__text">
          Blah blah sadadas asdasa asdsdad sad as da s d
        </p>
        <div className="notifications__info">
          <img className='notifications__info-icon' src={iconPath} alt="" />
        </div>
      </div>
      <div className="notifications__line">
        <p className="notifications__text ">Blah blah</p>
        <div className="notifications__info">
          <img className='notifications__info-icon' src={iconPath} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Notifications;
