import React from "react";
import {
  Container,
} from "reactstrap";
import { Button } from "antd"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import image1 from '../../assets/images/homepage-hero/1.jpg'
import image2 from '../../assets/images/homepage-hero/2.jpg'
import image3 from '../../assets/images/homepage-hero/3.jpg'
import image4 from '../../assets/images/homepage-hero/4.jpg'

// install Swiper modules
SwiperCore.use([Pagination]);

const title = "Adventure time"
const description = "Cold War. In Europe in the 1960s and 1980s, in the shadow of a nuclear war that looked close to them, there was a real need for heroes..."
const subLinks = [
  { label: "sci-fi", url: "/"},
  { label: "sci-fi", url: "/"},
  { label: "sci-fi", url: "/"}
]

const Slider = ({ title, imageUrl='1' }) => {
  return (
    <div className="hero-slide">
      <div className="hero-slide__image">
        <img src={imageUrl}/>
      </div>
      <div className="hero-slide__content">
        <div className="text-uppercase subtitle">now playing</div>
        <h2 className="text-uppercase title">{ title }</h2>
        <div className="text-uppercase links">
          <Link to="/">sci-fi</Link>
          <span className="divider mx-4">|</span>
          <Link to="/">action</Link>
          <span className="divider mx-4">|</span>
          <Link to="/">advantage</Link>
        </div>
        <div className="description">{ description }</div>
        <div className="hero-slide__content-action">
          <Button className="text-uppercase" type="primary" shape="round" size="large">play</Button>
          <Button className="text-uppercase"  type="primary" shape="round" size="large" ghost>trailer</Button>
        </div>
      </div>
    </div>
  )
}

const HompageHero = () => {
  return (
    <div className='homepage-hero'>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slider title={ title } imageUrl={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider title={ title } imageUrl={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider title={ title } imageUrl={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider title={ title } imageUrl={image4} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
  // <Container fluid className="homepage-hero">
  //   <div className="caption">
  //     <p className="text-uppercase">now playing</p>
  //     <h2 className="text-uppercase">{ title }</h2>
  //     <div>
  //       {
  //         subLinks.map(({ label, url}) =>
  //           <Link to={url}> { label } </Link>
  //         )
  //       }
  //     </div>
  //     <p>{ description }</p>
  //     <div className="button-wrapper">
  //       <Button varients="primary" className="mr-2">Play</Button>
  //       <Button className="text-uppercase">Trailer</Button>
  //     </div>
  //   </div>
  // </Container>
};

export default HompageHero;
