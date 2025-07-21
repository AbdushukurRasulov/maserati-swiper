import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation, EffectFade } from "swiper/modules";

import img1 from "/images/exterior/appearance1.jpg";
import img2 from "/images/exterior/appearance2.jpg";
import img3 from "/images/exterior/appearance3.jpg";

const imgs = [img1, img2, img3];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <div className="h-screen"></div>
      <div className="relative">
        <Swiper
          className="max-w-screen h-lvh w-full"
          loop={true}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          effect={"fade"}
          modules={[EffectFade, Navigation]}
          navigation={{
            nextEl: ".swiper-maserati-slider-next-button",
            prevEl: ".swiper-maserati-slider-prev-button"
          }}>
          {imgs.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className={`${
                activeIndex === idx
                  ? direction === "prev"
                    ? "swiper-prev-active-animation"
                    : "swiper-next-active-animation"
                  : ""
              }`}>
              <img src={img} className="size-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" onClick={() => setDirection("prev")} className="swiper-maserati-slider-prev-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button type="button" onClick={() => setDirection("next")} className="swiper-maserati-slider-next-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
