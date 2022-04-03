import React from 'react';
import circlePath from '../images/background-circle.png'
import metamaskPath from '../images/icons/metamask.svg'
import coinbasePath from '../images/icons/coinbase.svg'
import walletconnectPath from '../images/icons/walletconnect.svg'
import fortmaticPath from '../images/icons/fortmatic.svg'

const Connection = () => {
  return (
    <section className='connection'>
      <img className='connection__circle' src={circlePath} alt="" />

      <div className="connection__text">
        <h2 className="connection__text-title">connection</h2>
        <h3 className="connection__text-subtitle">You need an Etheream wallet to use OTC Marketplace</h3>
      </div>

      <div className="connection__wallets">
        <div className="connection__wallets-wallet">
          <img src={metamaskPath} alt="" className="connection__wallets-wallet-icon" />
          <h4 className="connection__wallets-wallet-name">Metamask</h4>
        </div>
        <div className="connection__wallets-wallet">
          <img src={coinbasePath} alt="" className="connection__wallets-wallet-icon" />
          <h4 className="connection__wallets-wallet-name">Coinbase Wallet</h4>
        </div>
        <div className="connection__wallets-wallet">
          <img src={walletconnectPath} alt="" className="connection__wallets-wallet-icon" />
          <h4 className="connection__wallets-wallet-name">WalletConnect</h4>
        </div>
        <div className="connection__wallets-wallet">
          <img src={fortmaticPath} alt="" className="connection__wallets-wallet-icon" />
          <h4 className="connection__wallets-wallet-name">Fortmatic</h4>
        </div>
        <div className="connection__wallets-showmore">
          Show more options
        </div>

      </div>
      
    </section>
  );
}

export default Connection;
