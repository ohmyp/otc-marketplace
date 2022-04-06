import React from 'react';
import ethPath from '../images/icons/eth.svg'

const Wallet = () => {
  return (
    <div className='wallet'>
      <img src={ethPath} alt="" className="wallet__icon" />
      <div className="wallet__balance">
        <p className="wallet__balance-title">1,1ETH</p>
        <p className="wallet__balance-subtitle">36,43$</p>
      </div>
    </div>
  );
}

export default Wallet;
