import React from "react";
import { Button } from "antd"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination } from "swiper";
import image1 from "../../assets/images/homepage-hero/1.jpg";
import image2 from "../../assets/images/homepage-hero/2.jpg";
import image3 from "../../assets/images/homepage-hero/3.jpg";
import image4 from "../../assets/images/homepage-hero/4.jpg";

import horrorIcon from "../../assets/images/homepage/horror.svg"
import mysteryIcon from "../../assets/images/homepage/mystery.svg"
import sciFiIcon from "../../assets/images/homepage/sci-fi.svg"

// install Swiper modules
SwiperCore.use([Pagination]);

const description = "Cold War. In Europe in the 1960s and 1980s, in the shadow of a nuclear war that looked close to them, there was a real need for heroes...";
const sliders = [
  { title: "Adventure time", image: image1 },
  { title: "Adventure time", image: image2 },
  { title: "Adventure time", image: image3 },
  { title: "Adventure time", image: image4 },
]
const genres = [
  { label: "morror", icon: horrorIcon },
  { label: "sci-fi", icon: sciFiIcon },
  { label: "mystery", icon: mysteryIcon },
  { label: "action", icon: mysteryIcon },
]

const Slider = ({ title, imageUrl='1' }) => {
  return (
    <div className="hero-slide">
      <div className="hero-slide__image">
        <img src={imageUrl} alt="hero images"/>
      </div>
      <div className="hero-slide__content">
        <div className="text-uppercase subtitle my-3">now playing</div>
        <h2 className="text-uppercase title my-3">{ title }</h2>
        <div className="text-uppercase links my-3">
          <Link to="/">sci-fi</Link>
          <span className="divider mx-4">|</span>
          <Link to="/">action</Link>
          <span className="divider mx-4">|</span>
          <Link to="/">advantage</Link>
        </div>
        <div className="description">{ description }</div>
        <div className="hero-slide__content-action mt-5">
          <Button className="text-uppercase mr-3" type="primary" shape="round" size="large">play</Button>
          <Button className="text-uppercase"  type="primary" shape="round" size="large" ghost>trailer</Button>
        </div>
      </div>
    </div>
  )
}

const Genre = ({ label, icon }) => {
  return (
    <div className="film-genres__item border-base">
      <span className="mx-4 my-4">{ label }</span>
      <img src={icon} alt="genre icon" />
    </div>
  )
}

const HompageHero = () => {
  return (
    <div className='homepage-hero'>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        resistanceRatio={0}
      >
        {
          sliders.map(({ title, image }, index ) => (
            <SwiperSlide>
              <Slider title={ `${title}_${index + 1}` } imageUrl={image} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        className="film-genres py-5"
        breakpoints={
          {
            768: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }
        }
      >
        {
          genres.map(genre => (
            <SwiperSlide>
              <Genre {...genre} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};

export default HompageHero;
