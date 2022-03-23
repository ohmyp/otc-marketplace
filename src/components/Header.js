import smallLogoPath from "../images/small-logo.svg";
import underlinePath from "../images/underline.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={smallLogoPath} alt="OTC logo" />
        <ul className="header__navigation">
          <li className="header__nav-link">New</li>
          <li className="header__nav-link">Market</li>
          <li className="header__nav-link">Soon</li>
          <li className="header__nav-link">Connect wallet</li>
          <li className="header__nav-link">Search</li>
        </ul>
        <button className="header__burger"></button>
      </div>
      <img className="header__underline" src={underlinePath} alt="Header underline"></img>
    </header>
  );
}

export default Header;
