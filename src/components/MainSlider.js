import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"

import Card from "./Card";

import heathensImagePath from "../images/heathens.png";
import blvckImagePath from "../images/blvck.png";
import krakenImagePath from "../images/kraken.png";
import wariorsImagePath from "../images/warriors.png";

function MainSlider() {
  return (
    <Swiper
      className="main-slider"
      modules={[Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={2}
      scrollbar={{ draggable: true, dragSize: 60 }}
      autoplay={{ delay: 4000, disableOnInteraction:false }}
    >
      <SwiperSlide>
        <Card
          id=""
          title="Heathens"
          price={200}
          imagePath={heathensImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card id="" title="Blvck" price={450} imagePath={blvckImagePath} />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          id=""
          title="Kraken Secret Society"
          price={320}
          imagePath={krakenImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          id=""
          title="Warriors Of Ankh"
          price={200}
          imagePath={wariorsImagePath}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
