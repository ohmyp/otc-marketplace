import { Link } from "react-router-dom";
import smallLogoPath from "../images/small-logo.svg";
import searchIconPath from "../images/search-icon.svg";
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory().location.pathname
  return (
    <header className="header">
      <div className="header__underline"></div>
        <div className="header__container">
          <img className="header__logo" src={smallLogoPath} alt="OTC logo" />
          <ul className="header__navigation">
            <li className={"header__nav-link " + (history === '/' ?'selected':"")}><Link to='/' >New</Link></li>
            <li className={"header__nav-link " + (history === '/market' ?'selected':"")}><Link to='/market'>Market</Link></li>
            <li className={"header__nav-link " + (history === '/aboutUs' ?'selected':"")}><Link to='/aboutUs'>About Us</Link></li>
            <li className={"header__nav-link " + (history === '/ourcontacts' ?'selected':"")}><Link to='ourcontacts'>Contacts</Link></li>
            <li className="header__nav-link"><Link>Soon 🔥</Link></li>
            <div className="header__nav-search-container">
              <input type="text" className="header__nav-search" />
              <img className="header__nav-icon" src={searchIconPath} alt="" />
            </div>
            <ProfileButton/>
          </ul>
        </div>
    </header>
  );
}

export default Header;
