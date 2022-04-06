import React from 'react';
import profileIconPath from '../images/user-icon.svg'
import notivicationPath from '../images/icons/notification.svg'
import likePath from '../images/icons/like.svg'
import shoppingCartPath from '../images/icons/shopping-cart.svg'
import walletPath from '../images/icons/wallet.svg'
import Notifications from './Notifications';
import Liked from './Liked';
import Wallet from './Wallet';
const ProfileButton = () => {

  const [menuOpened, setmenuOpened] = React.useState(false)
  const [tabOpened, setTabOpened] = React.useState('')

  const openMenu = () => {
    setmenuOpened(prev => !prev)
    setTabOpened('')
  }
  const openTab = (e) => {
    const name = e.target.name
    console.log(name);
    if (name === tabOpened) setTabOpened('')
    else setTabOpened(e.target.name)
  }

  return (
    <div className="header__nav-menu">
      <img className='menu__profile' src={profileIconPath} onClick={openMenu}/>
      {menuOpened &&
      <>
        <div className='menu__notifications dotted'>
          <img className='menu__button' src={notivicationPath} name='notifications' onClick={openTab}/>
          {tabOpened === 'notifications' &&  <Notifications />}
        </div>
        <div className='menu__notifications'>
          <img className='menu__button' src={likePath} name='liked' onClick={openTab}/>
          {tabOpened === 'liked' &&  <Liked />}
        </div>
        <div className='menu__notifications'>
          <img className='menu__button' src={shoppingCartPath} />
        </div>
        <div className='menu__notifications' >
          <img className='menu__button' src={walletPath} name='wallet' onClick={openTab}/>
          {tabOpened === 'wallet' &&  <Wallet />}
        </div>
      </>
      }
    </div>
  )
}

export default ProfileButton;
