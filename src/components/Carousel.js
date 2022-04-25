import "../css/carousel.css";
import React from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Carousel = ({ albums, setAlbum }) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        A11y,
        Mousewheel,
        Keyboard,
        EffectCoverflow,
      ]}
      //rewind={true}
      cssMode={true}
      spaceBetween={50}
      slidesPerView={5}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 10,
        stretch: 10,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      centeredSlides={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => setAlbum(swiper.activeIndex)}
    >
      {albums.map((album) => {
        return (
          <SwiperSlide key={album.id}>
            <img src={album.cover_photo_url} alt="album" />
            <div>{album.name}</div>
            <div>{album.artist_name}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
