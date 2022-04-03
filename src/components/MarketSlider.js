import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, A11y} from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


function MarketSlider() {
  return (
    <Swiper
      className="market-slider"
      modules={[Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true, dragSize: 60 }}
      autoplay={{ delay: 4000, disableOnInteraction:false }}
    >
      <SwiperSlide>
        <div id="slide-1" className="slide">
          <h4 className="slide__title">ForgottenEtherealWords</h4>
          <p className="slide__price">720$</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="slide-2" className="slide">
          <h4 className="slide__title">Shinsekai</h4>
          <p className="slide__price">110$</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="slide-3" className="slide">
          <h4 className="slide__title">Tripsters</h4>
          <p className="slide__price">215$</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="slide-4" className="slide">
          <h4 className="slide__title">Warriors Of Ankh</h4>
          <p className="slide__price">110$</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default MarketSlider;
