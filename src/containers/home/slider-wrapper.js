import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Row, Col } from "reactstrap";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slide = ({ imageUrl, title, description, defaultSlide }) => {
  const onIconClick = () => {
    console.log("icon click");
  };

  return (
    <>
      <img
        src={imageUrl}
        alt={"video preview"}
        className={defaultSlide ? "default-slide" : ""}
      />
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <RightOutlined onClick={onIconClick} />
      </div>
    </>
  );
};

const SliderWrapper = ({ title, videos, defaultSlide }) => {
  const sliderClass = classNames({
    default: defaultSlide,
    slider: true,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="homepage-slider-wrapper container">
      <Row>
        <Col className="homepage-slider-wrapper__header mt-5 mb-3">
          <div className="d-flex align-items-center">
            <span className="title">{title}</span>
            <Link className="text-uppercase" to="/">
              view more
            </Link>
          </div>
          <div className="slider-navigation">
            <LeftOutlined className="mr-2" ref={prevRef} />
            <RightOutlined ref={nextRef} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Swiper
            className={sliderClass}
            slidesPerView={2}
            spaceBetween={20}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              768: {
                slidesPerView: defaultSlide ? 2 : 3,
                spaceBetween: defaultSlide ? 30 : 20,
              },
              1024: {
                slidesPerView: defaultSlide ? 2 : 4,
                spaceBetween: defaultSlide ? 40 : 30,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <Slide {...video} defaultSlide className={"p-3"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default SliderWrapper;
