import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Row, Col } from "reactstrap";
import history from "../../history";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Slide = ({ video, defaultSlide }) => {
  const goToVideo = (mediaId) => {
    history.push(`/videos/${mediaId}`);
  };

  return (
    <>
      <img
        src={video.metadata.custom_params.cover}
        alt={"video preview"}
        className={defaultSlide ? "default-slide" : ""}
        onClick={() => goToVideo(video.id)}
      />
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{video.metadata.title}</p>
          <p className="description">
            {video.metadata.custom_params.release_date} •{" "}
            {video.metadata.tags.join(", ")}
          </p>
        </div>
        <RightOutlined />
      </div>
    </>
  );
};

const SliderWrapper = ({
  title,
  videos,
  defaultSlide,
  category,
  disableLabel,
}) => {
  const sliderClass = classNames({
    default: defaultSlide,
    slider: true,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="homepage-slider-wrapper container">
      {!disableLabel && (
        <Row>
          <Col className="homepage-slider-wrapper__header mt-5 mb-3">
            <div className="d-flex align-items-center">
              <span className="title">{title}</span>
              <Link
                className="text-uppercase"
                to={`/library${category ? "?category=" + category : ""}`}
              >
                view more
              </Link>
            </div>
            <div className="slider-navigation">
              <LeftOutlined className="mr-2" ref={prevRef} />
              <RightOutlined ref={nextRef} />
            </div>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Swiper
            className={sliderClass}
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{
              delay: 5000,
            }}
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
            {videos.map((video) => (
              <SwiperSlide
                key={video.id}
                className={defaultSlide ? "featured" : ""}
              >
                <Slide video={video} defaultSlide className={"p-3"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default SliderWrapper;
