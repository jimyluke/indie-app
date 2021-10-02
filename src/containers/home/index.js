import React, { Component } from "react";
import Header from "./header";
import Hero from "./hero";
import SliderWrapper from "./slider-wrapper";
import Footer from "./footer"

import image1 from "../../assets/images/homepage-hero/1.jpg";
import image2 from "../../assets/images/homepage-hero/2.jpg";
import image3 from "../../assets/images/homepage-hero/3.jpg";
import image4 from "../../assets/images/homepage-hero/4.jpg";

const featuredFilms = [
  { imageUrl: image1, title: "Beauty and the Beast", description: "1994-Crime,Drama"},
  { imageUrl: image2, title: "Las Brujas", description: "1994-Crime,Drama"}
]
const justAddedFilms = [
  { imageUrl: image1, title: "Sparxs Movie", description: "1994-Crime,Life"},
  { imageUrl: image2, title: "The Best Man Holiday", description: "1994-Crime,Drama"},
  { imageUrl: image3, title: "Beauty and the Beast", description: "1994-Crime,Drama"},
  { imageUrl: image4, title: "Las Brujas", description: "1994-Drama,Drama"}
]
const actionFilms = [
  { imageUrl: image1, title: "Beauty and the Beast", description: "1994-Crime,Drama"},
  { imageUrl: image2, title: "Las Brujas", description: "1994-Crime,Drama"},
  { imageUrl: image3, title: "Sylvie's Love", description: "1994-Crime,Drama"},
  { imageUrl: image4, title: "Forest Gump", description: "1994-Drama,Life"}
]
const mysteryFilms = [
  { imageUrl: image3, title: "The Godfather", description: "1994-Crime,Drama"},
  { imageUrl: image4, title: "Forest Gump", description: "1994-Drama,Life"},
  { imageUrl: image1, title: "Beauty and the Beast", description: "1994-Crime,Drama"},
  { imageUrl: image2, title: "Las Brujas", description: "1994-Crime,Drama"}
]

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <Hero />
        <SliderWrapper title="featured film" videos={featuredFilms} defaultSlide />
        <SliderWrapper title="Just Added" videos={justAddedFilms} />
        <SliderWrapper title="Action" videos={actionFilms} />
        <SliderWrapper title="Mystery" videos={mysteryFilms} />
        <div className="homepage-quote">
          <div className="homepage-quote__wrapper py-5">
            <div>When people ask me if I went to film school I tell them, 'no, I went to films.'</div>
            <div className="mt-4">- Tarantino</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
