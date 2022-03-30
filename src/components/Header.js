import smallLogoPath from "../images/small-logo.svg";
import underlinePath from "../images/underline.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__underline"></div>
        <div className="header__container">
          <img className="header__logo" src={smallLogoPath} alt="OTC logo" />
          <ul className="header__navigation">
            <li className="header__nav-link selected"><a href="">New</a></li>
            <li className="header__nav-link"><a href="">Market</a></li>
            <li className="header__nav-link"><a href="">Soon</a></li>
            <li className="header__nav-link"><a href="">Connect wallet</a></li>
            <li className="header__nav-link"><a href="">Search</a></li>
            {/* <button className="header__burger">x</button> */}
          </ul>
        </div>
    </header>
  );
}

export default Header;
