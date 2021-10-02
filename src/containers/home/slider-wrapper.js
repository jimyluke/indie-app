import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import classNames from "classnames";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slide = ({ imageUrl , title, description, defaultSlide }) => {
  const onIconClick = () => {
    console.log('icon click')
  }

  return (
    <>
      <img src={imageUrl} alt={'video preview'}/>
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <RightOutlined onClick={onIconClick} />
      </div>
    </>
  )
}

const SliderWrapper = ({ title, videos, defaultSlide }) => {
  const sliderClass = classNames({
    'default': defaultSlide,
    'slider': true
  });
  const slidesCountPerView = defaultSlide ? 2 : 4

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='homepage-slider-wrapper'>
      <div className='homepage-slider-wrapper__header my-4'>
        <div className="d-flex align-items-center">
          <span className="title mr-5">{ title }</span>
          <Link className="text-uppercase nav-link" to="/">view more</Link>
        </div>
        <div className="slider-navigation">
          <LeftOutlined className="mr-2" ref={prevRef} />
          <RightOutlined ref={nextRef} />
        </div>
      </div>
      <Swiper
        className={sliderClass}
        slidesPerView={slidesCountPerView / 2}
        spaceBetween={50}
        breakpoints={
          {
            768: {
              slidesPerView: slidesCountPerView,
              spaceBetween: 50
            }
          }
        }
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {
          videos.map((video, index) => (
            <SwiperSlide key={index}>
              <Slide {...video} defaultSlide className={"p-3"}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};

export default SliderWrapper;
