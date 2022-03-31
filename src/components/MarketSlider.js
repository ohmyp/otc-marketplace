import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MarketSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true, dragSize: 60 }}
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
