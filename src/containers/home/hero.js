import React from "react";
import {
  Container,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";


const title = "Adventure time"
const description = "Cold War. In Europe in the 1960s and 1980s, in the shadow of a nuclear war that looked close to them, there was a real need for heroes..."
const subLinks = [
  { label: "sci-fi", url: "/"},
  { label: "sci-fi", url: "/"},
  { label: "sci-fi", url: "/"}
]

const HompageHero = () => (

  <Container fluid className="homepage-hero">
    <div className="caption">
      <p className="text-uppercase">now playing</p>
      <h2 className="text-uppercase">{ title }</h2>
      <div>
        {
          subLinks.map(({ label, url}) =>
            <Link to={url}> { label } </Link>
          )
        }
      </div>
      <p>{ description }</p>
      <div className="button-wrapper">
        <Button varients="primary" className="mr-2">Play</Button>
        <Button className="text-uppercase">Trailer</Button>
      </div>
    </div>
  </Container>
);

export default HompageHero;
