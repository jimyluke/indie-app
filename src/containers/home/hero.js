import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { Container } from "reactstrap";
import { genres } from "../../constants";
// install Swiper modules
SwiperCore.use([Pagination]);

const Slider = ({ film }) => {
  return (
    <div className="hero-slide">
      <div className="hero-slide__image">
        <img src={film.metadata.custom_params.cover} alt="" />
      </div>
      <div className="hero-slide__content">
        <Container>
          <div className="text-uppercase subtitle my-3">now playing</div>
          <h2 className="text-uppercase title my-3">{film.metadata.title}</h2>
          <div className="text-uppercase links my-3">
            {film.metadata.tags.join(", ")}
          </div>
          <div className="description">{film.metadata.description}</div>
          <div className="hero-slide__content-action mt-5">
            <a
              className="material-btn mr-3"
              href={`/videos/player/${film.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play
            </a>
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

const Genre = ({ name, icon }) => {
  return (
    <Link
      to={`/library?category=${name}`}
      className="film-genres__item border-base m-0"
    >
      <span>{name}</span>
      <img src={icon} alt="genre icon" />
    </Link>
  );
};

class HompageHero extends Component {
  render() {
    const { jwplayer } = this.props;
    const featuredFilms = jwplayer.all_videos
      .filter((flm) => flm.featured)
      .slice(0, 4);
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
          {featuredFilms.map((film) => (
            <SwiperSlide key={film.id}>
              <Slider film={film} />
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
            {genres.map((genre) => (
              <SwiperSlide key={genre.name}>
                <Genre {...genre} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jwplayer: state.jwplayer,
    user: state.user.profile,
  };
};

export default connect(mapStateToProps, {})(HompageHero);
