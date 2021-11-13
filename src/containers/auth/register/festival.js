import React from "react";
import { Container } from "reactstrap";
import { Header, Footer } from "../../../components/template";
import FestivalImg from "../../../assets/images/auth/festival.png";

const Festival = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main-content">
        <Container className="pt-5">
          <div className="fest-img">
            <span className="fest-img-title">Film Festival</span>
            <span className="fest-img-desc">coming soon!</span>
            <img src={FestivalImg} alt="" />
          </div>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Festival;
