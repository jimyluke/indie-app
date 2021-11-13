import React, { Component } from "react";
import { connect } from "react-redux";
import Hero from "./hero";
import SliderWrapper from "../../components/video/slider-wrapper";
import { Header, Footer } from "../../components/template";
import { Container } from "reactstrap";
import { filterVideoByGenre, fetchJWVideos } from "../../actions/jwplayer";

class HomePage extends Component {
  componentDidMount = () => {
    const { fetchJWVideos, jwplayer } = this.props;
    const allvideos = jwplayer.all_videos;
    if (allvideos.length === 0) {
      fetchJWVideos();
    }
  };

  render() {
    const { filterVideoByGenre, jwplayer } = this.props;
    const justAddedFilms = jwplayer.all_videos;
    const featuredFilms = justAddedFilms.filter((flm) => flm.featured);
    const actionFilms = filterVideoByGenre("Action");
    const mysteryFilms = filterVideoByGenre("Mystery");
    return (
      <div className="homepage">
        <Header />
        <Hero />
        <SliderWrapper
          title="Featured Film"
          videos={featuredFilms}
          defaultSlide
        />
        <SliderWrapper title="Just Added" videos={justAddedFilms} />
        <div className="homepage-background_block">
          <SliderWrapper
            title="Action"
            videos={actionFilms}
            category={"Action"}
          />
          <SliderWrapper
            title="Mystery"
            videos={mysteryFilms}
            category={"Mystery"}
          />
          <div className="homepage-quote">
            <Container>
              <div className="homepage-quote__wrapper">
                <div>
                  When people ask me if I went to film school I tell them, 'no,
                  I went to films.'
                </div>
                <div className="author">- Tarantino</div>
              </div>
            </Container>
          </div>
        </div>
        <div className="homepage-blendcolor" />
        <Footer />
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

export default connect(mapStateToProps, { filterVideoByGenre, fetchJWVideos })(
  HomePage
);
