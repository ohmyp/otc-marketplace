import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

import ShopCard from "./ShopCard";

import heathensImagePath from "../images/heathens.png";
import blvckImagePath from "../images/blvck.png";
import krakenImagePath from "../images/kraken.png";
import wariorsImagePath from "../images/warriors.png";

function AboutSlider() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      className="about-slider"
      modules={[A11y, Autoplay, EffectCards]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <ShopCard
          id=""
          title="Heathens"
          price={200}
          imagePath={heathensImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard
          id=""
          title="Blvck"
          price={450}
          imagePath={blvckImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard
          id=""
          title="Kraken Secret Society"
          price={320}
          imagePath={krakenImagePath}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ShopCard
          id=""
          title="Warriors Of Ankh"
          price={200}
          imagePath={wariorsImagePath}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default AboutSlider;
