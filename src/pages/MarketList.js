import Header from "../components/Header";
import Card from "../components/Card";
import MarketSlider from "../components/MarketSlider";

import heathensImagePath from "../images/heathens.png";
import blvckImagePath from "../images/blvck.png";
import circlePath from "../images/background-circle.png";

import krakenImagePath from "../images/kraken.png";
import wariorsImagePath from "../images/warriors.png";

function MarketList() {
  return (
    <>
      <Header />
      <section className="offer">
        <MarketSlider />
        <div className="popular">
          <h3 className="popular__title">Popular</h3>
          <div className="popular__list">
            <div className="mini-card">
              <img className="mini-card__image" src={krakenImagePath} />
              <h4 className="mini-card__title">Kraken Secret Society</h4>
              <p className="mini-card__price">320$</p>
            </div>
            <div className="mini-card">
              <img className="mini-card__image" src={wariorsImagePath} />
              <h4 className="mini-card__title">Warriors Of Ankh</h4>
              <p className="mini-card__price">200$</p>
            </div>
          </div>
          <div className="popular__underline"></div>
        </div>
      </section>
      <section className="whitelists">
        <h3 className="whitelists__title">Avaliable whitelists</h3>
        <div className="whitelists__filter">
          <button className="whitelists__filter-button whitelists__filter-button_active">
            Recent
          </button>
          <button className="whitelists__filter-button">&gt;1 hour</button>
          <button className="whitelists__filter-button">&gt;1 day</button>
          <button className="whitelists__filter-button">&gt;1 week</button>
        </div>
        <div className="whitelists__card-list">
          <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={heathensImagePath}
          />
          <Card id="" title="Blvck" price={450} imagePath={blvckImagePath} />
          <Card
            id=""
            title="Kraken Secret Society"
            price={320}
            imagePath={krakenImagePath}
          />
          <Card id="" title="Warriors Of Ankh" price={200} imagePath={wariorsImagePath} />
          <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={heathensImagePath}
          />
           <Card id="" title="Warriors Of Ankh" price={200} imagePath={wariorsImagePath} />
          <Card
            id=""
            title="Kraken Secret Society"
            price={320}
            imagePath={krakenImagePath}
          />
          <Card id="" title="Blvck" price={450} imagePath={blvckImagePath} />
          <Card
            id=""
            title="Kraken Secret Society"
            price={320}
            imagePath={krakenImagePath}
          />
          <Card id="" title="Blvck" price={450} imagePath={blvckImagePath} />
          <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={heathensImagePath}
          />
          <Card id="" title="Warriors Of Ankh" price={200} imagePath={wariorsImagePath} />
          <Card
            id=""
            title="Heathens"
            price={200}
            imagePath={heathensImagePath}
          />
          <Card id="" title="Blvck" price={450} imagePath={blvckImagePath} />
          <Card
            id=""
            title="Kraken Secret Society"
            price={320}
            imagePath={krakenImagePath}
          />
          <Card id="" title="Warriors Of Ankh" price={200} imagePath={wariorsImagePath} />
        </div>
        <img
          className="whitelist__background-picture"
          src={circlePath}
          alt="Background circle 1"
        />
        <img
          className="whitelist__background-picture"
          src={circlePath}
          alt="Background circle 2"
        />
      </section>
    </>
  );
}

export default MarketList;
