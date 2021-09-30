import React, { Component } from "react";
import HomepageHeader from "./header";
import HomepageHero from "./hero"

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <HomepageHeader />
        <HomepageHero />
      </div>
    );
  }
}

export default HomePage;
