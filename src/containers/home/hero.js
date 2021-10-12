import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";
import { Container } from "reactstrap";
import image1 from "../../assets/images/homepage-hero/hero.png";

import HorrorIcon from "../../assets/images/homepage/horror.svg";
import ActionIcon from "../../assets/images/homepage/action.svg";
import ComedyIcon from "../../assets/images/homepage/comedy.svg";
import DocumentIcon from "../../assets/images/homepage/document.svg";
import KidsIcon from "../../assets/images/homepage/kids.svg";
import RealityIcon from "../../assets/images/homepage/reality.svg";
import RomanceIcon from "../../assets/images/homepage/romance.svg";
import MysteryIcon from "../../assets/images/homepage/mystery.svg";
import SciFiIcon from "../../assets/images/homepage/sci-fi.svg";

// install Swiper modules
SwiperCore.use([Pagination]);

const description =
  "Cold War. In Europe in the 1960s and 1980s, in the shadow of a nuclear war that looked close to them, there was a real need for heroes...";
const sliders = [
  { title: "Adventure time", image: image1 },
  { title: "Adventure time", image: image1 },
  { title: "Adventure time", image: image1 },
  { title: "Adventure time", image: image1 },
];
const genres = [
  { label: "Horror", icon: HorrorIcon },
  { label: "Sci-fi", icon: SciFiIcon },
  { label: "Mystery", icon: MysteryIcon },
  { label: "Action", icon: ActionIcon },
  { label: "Comedy", icon: ComedyIcon },
  { label: "Document", icon: DocumentIcon },
  { label: "Reality", icon: RealityIcon },
  { label: "Kids", icon: KidsIcon },
  { label: "Romance", icon: RomanceIcon },
];

const Slider = ({ title, imageUrl = "1" }) => {
  return (
    <div className="hero-slide">
      <div className="hero-slide__image">
        <img src={imageUrl} alt="hero images" />
      </div>
      <div className="hero-slide__content">
        <Container>
          <div className="text-uppercase subtitle my-3">now playing</div>
          <h2 className="text-uppercase title my-3">{title}</h2>
          <div className="text-uppercase links my-3">
            <Link to="/">sci-fi</Link>
            <span className="divider mx-4">|</span>
            <Link to="/">action</Link>
            <span className="divider mx-4">|</span>
            <Link to="/">advantage</Link>
          </div>
          <div className="description">{description}</div>
          <div className="hero-slide__content-action mt-5">
            <Button
              className="text-uppercase mr-3"
              type="primary"
              shape="round"
              size="large"
            >
              play
            </Button>
            <Button
              className="text-uppercase"
              type="primary"
              shape="round"
              size="large"
              ghost
            >
              trailer
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

const Genre = ({ label, icon }) => {
  return (
    <div className="film-genres__item border-base m-0">
      <span>{label}</span>
      <img src={icon} alt="genre icon" />
    </div>
  );
};

const HompageHero = () => {
  return (
    <div className="homepage-hero">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        resistanceRatio={0}
        breakpoints={{
          768: {
            pagination: { clickable: true },
          },
        }}
      >
        {sliders.map(({ title, image }, index) => (
          <SwiperSlide key={index}>
            <Slider title={`${title}_${index + 1}`} imageUrl={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="homepage-hero_blendcolor" />
      <Container>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          className="film-genres py-5"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {genres.map((genre, index) => (
            <SwiperSlide key={index}>
              <Genre {...genre} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default HompageHero;
