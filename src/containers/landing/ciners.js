import React, { Component } from "react";
import { Link } from "react-router-dom";
import LandingHeader from "./landing_header";
import SignupForm from "./signup_form";

class HomePage extends Component {
  render() {
    return (
      <div className="home_layout">
        <LandingHeader />
        <section className="video_section" id="theVideo">
          <div className="container">
            <div className="video_wrap">
              <img
                src={require("../../assets/images/landing/video_screen.webp")}
                className="img-fluid"
                alt=""
              />
              <div className="video_info">
                <div className="heading_gradient">
                  <h3>experiential & interactive</h3>
                </div>
                <div className="para_texts">
                  <p>
                    INDIE Sparxs is an experiential and interactive
                    multi-platform streaming app and distribution channel
                    dedicated to independently produced film and TV.
                  </p>
                </div>
                <div className="watch_now">
                  <a
                    href="https://www.youtube.com/embed/Aj6D0EyhCPY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtubeVideo"
                    data-rel="youtubeVideo"
                  >
                    <img
                      src={require("../../assets/images/landing/play_button.png")}
                      className="img-fluid"
                      alt=""
                    />
                    <h6>WATCH NOW</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="video-overlay" />
        </section>

        <section className="be_real_wrap">
          <div className="container">
            <div className="contents">
              <div className="inner_contents">
                <div className="heading_gradient">
                  <h2>
                    Let’s be real, we are all <span className="break"></span>{" "}
                    <span className="bold_texts">emotional creatures</span>.
                  </h2>
                </div>
                <div className="texts">
                  <p>
                    So, it only makes sense that the films and series
                    recommended to us satisfy our emotional needs.
                  </p>
                </div>

                <div className="texts_boxes">
                  <div className="single_box box_1">
                    <p>Feeling blue & need a nice pick-me-up?</p>
                  </div>
                  <div className="single_box box_2">
                    <p>Lonely AF & need a movie to keep you company?</p>
                  </div>
                  <div className="single_box box_3">
                    <p>
                      Happy & healthy but need a little thrill in your life?
                    </p>
                  </div>
                </div>

                <div className="mockup_image">
                  <img
                    src={require("../../assets/images/landing/mock_up1.webp")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="mockup_mobile">
                  <img
                    src={require("../../assets/images/landing/mock_up2.webp")}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="para_texts">
                  <p>
                    <span className="bold_texts">
                      Through a series of personality and in-the-moment quiz
                      questions,
                    </span>{" "}
                    you can narrow down the perfect home cinematic experience
                    fit for the occasion! Plus, create your own personalized
                    library of films based on your mood and interests!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overlap_benefits overlap_benefits_ciners">
          <div className="particlesss">
            <img
              src={require("../../assets/images/landing/particles_video.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="overlap_image_part">
            <div className="container">
              <div className="overlap_image">
                <div className="images">
                  <div className="image_1 single_image">
                    <img
                      src={require("../../assets/images/landing/august-de-richelieu.webp")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="image_2 single_image">
                    <img
                      src={require("../../assets/images/landing/ekaterina-bolovtsova.webp")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="contents">
                  <div className="heading_gradient">
                    <h2>
                      Be a <span className="bold_texts">ciner!</span>
                    </h2>
                  </div>
                  <div className="yellow_texts">
                    <p>FILM FANATICS, BINGE WATCHERS, MOVIE CONNOISSEURS</p>
                  </div>
                  <div className="para_texts">
                    <p>
                      As a <span style={{ color: "#ff7e3e" }}>Ciner,</span> you
                      can attend premiere parties, get access to exclusive
                      events, connect with filmmakers and meet other like-minded
                      cinephiles. Did we mention you get to be a part of the
                      INDIE collective and help select our Filmmaker of the
                      Year?
                    </p>
                  </div>
                  <div className="clickable_link">
                    <Link to="/register">Get Started</Link>
                  </div>
                  <div className="para_texts not_a_creator">
                    <p>
                      Not a Ciner? <span className="break"></span> Learn more
                      about <Link to="/">Creators</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="the_benefits the_benefits_ciners">
            <div className="container">
              <div className="heading_gradient">
                <h2>
                  The <span className="bold_texts">benefits</span>
                </h2>
              </div>
              <div className="para_texts">
                <p>
                  <span className="color">Ciners</span> can watch films with
                  friends through Watch Parties, interact with their favorite
                  Creators, and enjoy the social streaming experience with
                  stories that are unique and diverse that can only be watched
                  on INDIE
                </p>
              </div>

              <div className="benefits">
                <div className="single_benefit">
                  <div className="icon">
                    <img
                      src={require("../../assets/images/landing/huge_collection_icon.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="texts">
                    <h5>A HUGE COLLECTION</h5>
                    <p>
                      10000+ free indie movies are available to you instantly.
                    </p>
                  </div>
                </div>
                <div className="single_benefit">
                  <div className="icon">
                    <img
                      src={require("../../assets/images/landing/watch_anywhere_icon.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="texts">
                    <h5>WATCH ANYWHERE</h5>
                    <p>Enjoy your favorite shows anytime and anywhere</p>
                  </div>
                </div>
                <div className="single_benefit">
                  <div className="icon">
                    <img
                      src={require("../../assets/images/landing/connected.png")}
                      className="img-fluid"
                      width="40"
                      alt=""
                    />
                  </div>
                  <div className="texts">
                    <h5>STAY CONNECTED</h5>
                    <p>
                      Сreate parties! Watch, share, discuss films with friends
                      online!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how_it_works">
          <div className="container">
            <div className="heading_gradient">
              <h2>
                How it <span className="bold_texts">works</span>
              </h2>
            </div>
            <div className="para_texts">
              <p>Getting started has never been easier.</p>
            </div>

            <div className="steps">
              <div className="single_step">
                <div className="image">
                  <img
                    src={require("../../assets/images/landing/download_app.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="texts">
                  <h5>Download the app</h5>
                  <p>Available on desktop, iOS & Android.</p>
                </div>
              </div>
              <div className="single_step">
                <div className="image">
                  <img
                    src={require("../../assets/images/landing/choose_experience.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="texts">
                  <h5>CHOOSE AN EXPERIENCE</h5>
                  <p>
                    Choose between live Virtual Cinema, curated Streaming
                    Library, or Film Festival events
                  </p>
                </div>
              </div>
              <div className="single_step">
                <div className="image">
                  <img
                    src={require("../../assets/images/landing/connect.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="texts">
                  <h5>CONNECT WITH OTHERS</h5>
                  <p>Stream and connect like never before.</p>
                </div>
              </div>
            </div>

            <div className="clickable_link">
              <Link to="/register">Get Started</Link>
            </div>
          </div>
        </section>

        <section className="set_account_wrap">
          <div className="particlesss">
            <img
              src={require("../../assets/images/landing/particles_sign_up.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="container">
            <div className="sign_up_wrap">
              <div className="set_account set_account_ciners">
                <div className="texts grid_item">
                  <h6>Ready to join the fun?</h6>
                  <div className="heading">
                    <h2>Let’s set up your account!</h2>
                  </div>
                  <div className="para_texts">
                    <p>
                      If you want to join us and start submitting your work,
                      just fill this little form and look out for an email from
                      us!
                    </p>
                  </div>
                </div>

                <div className="form_wrap">
                  <SignupForm />
                </div>
              </div>

              <div className="type_form">
                <div className="type_image">
                  <img
                    src={require("../../assets/images/landing/typeform.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="faqs_wrap" id="faqssss">
          <div className="container">
            <div className="faqs">
              <div className="heading_gradient">
                <h2>
                  Frequently Asked <span className="break"></span>{" "}
                  <span className="bold_texts">Questions</span>
                </h2>
              </div>

              <div className="accordion" id="theFaq">
                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseOne"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Is Indie Sparxs free?
                    </Link>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseTwo"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Which devices are supported?
                    </Link>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseThree"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Can I upload my film or short?
                    </Link>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseFour"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      I hate ads. Do I have to watch any?
                    </Link>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      No ads in the paid version! And even as a free user, you
                      will only be subject to viewing ads at the beginning of a
                      showing, just like watching previews in a traditional
                      theater. In the beta testing stage, you may see ads to
                      make sure that the ad-supported tier of our platform is
                      working properly.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseFive"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Can I be a Creator and a Ciner?
                    </Link>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseSix"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Is this platform specific to one genre?
                    </Link>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className="single_item">
                  <div className="click_item">
                    <Link
                      to="#"
                      data-target="#collapseSeven"
                      className="collapsed"
                      data-toggle="collapse"
                    >
                      Is this a global platform?
                    </Link>
                  </div>
                  <div
                    id="collapseSeven"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="interested_in_wrap">
          <div className="container">
            <div className="interested_in">
              <div className="heading grid_item">
                <h3>
                  Interested in{" "}
                  <span className="bold_texts">INDIE SPARXS?</span>
                </h3>
              </div>
              <div className="clickable_link">
                <Link to="/register">Get Started</Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_wrap">
          <div className="container">
            <div className="footer">
              <div className="single_part subscribe">
                <div className="footer_contents">
                  <h4>Subscribe</h4>
                  <p>We’ll never to spam you or share your email</p>

                  <form action="">
                    <div className="subscrip_form">
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="form-control"
                      />
                      <button type="submit" className="btn">
                        <img
                          src={require("../../assets/images/landing/subscribe_button.png")}
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>

                  <div className="copyright">
                    <p>&copy; Sparxs Studios, 2021</p>
                  </div>
                </div>
              </div>

              <div className="single_part contact_us">
                <div className="footer_contents">
                  <h4>Contact Us</h4>
                  <div className="texts">
                    <ul>
                      <li>Have a question? We'd love to hear from you!</li>
                      <li>
                        Please contact <Link to="/contact">here</Link> or send a
                        note directly to{" "}
                        <a href="mailto:info@sparxsstudio.com">
                          info@sparxsstudio.com
                        </a>
                        .
                      </li>
                      <li>
                        We'll respond within 48 hours, Monday through Friday.
                      </li>
                    </ul>
                  </div>

                  <div className="social_links">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook-square"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="copyright copyright_mobile">
                    <p>&copy; Sparxs Studios, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bottom_button">
          <div className="clickable_link">
            <Link to="/register">Get Started</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
