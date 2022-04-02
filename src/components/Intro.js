import heathensImagePath from "../images/heathens.png";
import blvckImagePath from "../images/blvck.png";
import backgroundImagePath from "../images/background image.png";

import Card from "./Card";

function Intro() {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">
          <i>otc</i>
          <br />
          market
          <br />
          place
          <span className="main__emojii">🤑</span>
        </h1>
        <div className="main__btn-container">
          <button className="main__button">Buy</button>
          <button className="main__button main__button_theme_dark">Sell</button>
        </div>
        <p className="main__subtitle">Our goal is to make sure that all your transactions take place with fully vetted buyers and sellers</p>
      </div>
      <div className="main__cards">
        <Card
          id="heathens-card"
          title="Heathens"
          price={200}
          imagePath={heathensImagePath}
        />
        <Card
          id="blvck-card"
          title="Blvck"
          price={450}
          imagePath={blvckImagePath}
        />
        <img
          className="main__background-img"
          src={backgroundImagePath}
          alt="Background image"
        />
      </div>
    </section>
  );
}

export default Intro;
