import React from 'react';
import profileIconPath from '../images/user-icon.svg'
const ProfileButton = () => {

  const [opened, setOpened] = React.useState(false)

  return (
    <div className="header__nav-menu">
      <img className='menu__profile' src={profileIconPath} onClick={() => setOpened(!opened)}/>
      {opened ?
      <>
        <img className='menu__button' src={profileIconPath} />
        <img className='menu__button' src={profileIconPath} />
      </>
      : <></>
      }
    </div>
  )
}

export default ProfileButton;
