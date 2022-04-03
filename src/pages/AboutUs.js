import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutSlider from "../components/AboutSlider";

import arrowPath from "../images/arrow line.svg";

import topArcPath from "../images/top-arc.png";
import bottomArcPath from "../images/bottom-arc.png";


import safetyPath from "../images/safety.png";
import firstPath from "../images/first.png";
import fastPath from "../images/fast.png";
import automaticPath from "../images/automatic.png";

function AboutUs() {
  return (
    <>
      <Header />
      <section className="main">
        <div className="main__container">
          <h2 className="main__title_theme_about-us main__title ">
            we make it easy to exchange whitelists
            <span className="main__emojii">✅</span>
          </h2>
          <p className="main__subtitle">
            Have you had problems buying or selling whitelists, then our site is
            for you. Our task is to facilitate and speed up the exchange
            process. We will always be glad to help you in the exchange
          </p>
          <div className="main__btn-container">
            <button className="main__button">Market</button>
            <button className="main__button main__button_theme_dark">
              Read More
            </button>
          </div>
          <div className="statistic">
            <div className="statistic__element">
              <h4 className="statistic__title">10k+</h4>
              <p className="statistic__subtitle">Succesful deals</p>
            </div>
            <div className="statistic__element">
              <h4 className="statistic__title">40k+</h4>
              <p className="statistic__subtitle">Buyers</p>
            </div>
            <div className="statistic__element">
              <h4 className="statistic__title">120k+</h4>
              <p className="statistic__subtitle">Online per day</p>
            </div>
            <div className="statistic__element">
              <h4 className="statistic__title">70k+</h4>
              <p className="statistic__subtitle">
                Dollars invested in the project
              </p>
            </div>
          </div>
        </div>
        <img src={arrowPath} className="main__arrow" alt="Arrow picture" />
        <AboutSlider />
      </section>
      <section className="future">
        <h3 className="future__title">the future is already here</h3>
        <p className="future__text">
          As we've said before, our goal is to make the process of transferring
          the whitelist from hand to hand easier. That's why we created this
          site, to make the process enjoyable for you. Our benefits are listed
          for you on this vintage.
        </p>
        <button className="main__button">Start</button>
      </section>
      <section className="properties">
        <img className="properties__top-arc" src={topArcPath} alt="Top arc picture"/>
        <div className="properties__grid">
            <div className="info-card">
                <img className="info-card__logo" src={safetyPath}/>
                <h4 className="info-card__title">safety</h4>
                <p className="info-card__text">We don't keep data about your accounts, we have introduced a whitelist verification system so that customers don't get an unknown product. That's the main goal - when you buy, we give you confidence that you won't be cheated and you'll get what you want.</p>
            </div>
            <div className="info-card">
                <img className="info-card__logo" src={fastPath}/>
                <h4 className="info-card__title">fast</h4>
                <p className="info-card__text">We care about the speed of the transaction as much as you do, so we also plan to introduce a wallet connection feature to speed up the buying process even more, and now you can make a purchase, as well as the sale of whitelists in a few clicks.</p>
            </div>
            <div className="info-card">
                <img className="info-card__logo" src={firstPath}/>
                <h4 className="info-card__title">first</h4>
                <p className="info-card__text">It was our team's idea to come up with a site that would combine all the features that conventional OTC channels lack and improve, speed up, and secure the process of exchanging whitelists between buyer and seller.</p>
            </div>
            <div className="info-card">
                <img className="info-card__logo" src={automaticPath}/>
                <h4 className="info-card__title">automatic</h4>
                <p className="info-card__text">Our marketplace has automated the process of buying and selling whitelist as much as possible, up to the fact that it can be done in one click</p>
            </div>
        </div>
        <img className="properties__bottom-arc" src={bottomArcPath} alt=" arc picture"/>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
