import React, { Component } from "react";
import Header from "./header";
import Hero from "./hero";
import SliderWrapper from "./slider-wrapper";
import Footer from "./footer";
import { Container } from "reactstrap";
import image1 from "../../assets/images/homepage-hero/1.png";
import image2 from "../../assets/images/homepage-hero/2.png";
import image3 from "../../assets/images/homepage-hero/3.png";
import image4 from "../../assets/images/homepage-hero/4.png";
import image5 from "../../assets/images/homepage-hero/5.png";
import image6 from "../../assets/images/homepage-hero/6.png";
import image7 from "../../assets/images/homepage-hero/7.png";

const featuredFilms = [
  {
    imageUrl: image3,
    title: "Beauty and the Beast",
    description: "1994-Crime,Drama",
  },
  { imageUrl: image4, title: "Las Brujas", description: "1994-Crime,Drama" },
];
const justAddedFilms = [
  { imageUrl: image1, title: "Sparxs Movie", description: "1994-Crime,Life" },
  {
    imageUrl: image2,
    title: "The Best Man Holiday",
    description: "1994-Crime,Drama",
  },
  {
    imageUrl: image3,
    title: "Beauty and the Beast",
    description: "1994-Crime,Drama",
  },
  { imageUrl: image4, title: "Las Brujas", description: "1994-Drama,Drama" },
];
const actionFilms = [
  {
    imageUrl: image7,
    title: "Beauty and the Beast",
    description: "1994-Crime,Drama",
  },
  { imageUrl: image6, title: "Las Brujas", description: "1994-Crime,Drama" },
  { imageUrl: image5, title: "Sylvie's Love", description: "1994-Crime,Drama" },
  { imageUrl: image4, title: "Forest Gump", description: "1994-Drama,Life" },
];
const mysteryFilms = [
  { imageUrl: image3, title: "The Godfather", description: "1994-Crime,Drama" },
  { imageUrl: image4, title: "Forest Gump", description: "1994-Drama,Life" },
  {
    imageUrl: image7,
    title: "Beauty and the Beast",
    description: "1994-Crime,Drama",
  },
  { imageUrl: image6, title: "Las Brujas", description: "1994-Crime,Drama" },
];

class HomePage extends Component {
  render() {
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
          <SliderWrapper title="Action" videos={actionFilms} />
          <SliderWrapper title="Mystery" videos={mysteryFilms} />
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

export default HomePage;
