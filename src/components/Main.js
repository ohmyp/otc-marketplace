import heathensImagePath from "../images/heathens.png"
import blvckImagePath from "../images/blvck.png"
import backgrounImagePath from "../images/background image.png"

function Main() {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title"><i>otc</i><br />market<br />place</h1>
        <div className="main__btn-container">
          <button className="main__button">Buy</button>
          <button className="main__button main__button_theme_dark">Sell</button>
        </div>
      </div>
      <div className="main__cards">
        <div id="heathens-card" className="card">
            <img className="card__image" src={heathensImagePath} alt="Heathens picture" />
            <h3 className="card__title">Heathens</h3>
            <p className="card__price">200$</p>
        </div>
        <div id="blvck-card" className="card">
            <img className="card__image" src={blvckImagePath} alt="Heathens picture" />
            <h3 className="card__title">Blvck</h3>
            <p className="card__price">450$</p>
        </div>
        <img className="main__background-img" src={backgrounImagePath} alt="Background image" />
      </div>
    </section>
  );
}

export default Main;
