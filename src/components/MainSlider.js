import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Card from "./Card";

import heathensImagePath from "../images/heathens.png";
import blvckImagePath from "../images/blvck.png";
import krakenImagePath from "../images/kraken.png";
import wariorsImagePath from "../images/warriors.png";

function MainSlider() {
  return (
    <Swiper
      className="main-slider"
      modules={[Scrollbar, A11y, Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      scrollbar={{ draggable: true, dragSize: 60 }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <Card
          slide={true}
          id=""
          title="Heathens"
          price={200}
          imagePath={heathensImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          slide={true}
          id=""
          title="Blvck"
          price={450}
          imagePath={blvckImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          slide={true}
          id=""
          title="Kraken Secret Society"
          price={320}
          imagePath={krakenImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          slide={true}
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
