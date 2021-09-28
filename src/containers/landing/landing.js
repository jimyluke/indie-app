import React, { Component } from "react";
import { Link } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div className="home_layout">
        <header className="header">
          <div className="overlay">
            <div className="container-fluid">
              <div className="logo_login">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={require("../../assets/images/INDIElogo.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="login grid_item">
                  <Link to="/login">LOG IN</Link>
                </div>
              </div>

              <div className="contents">
                <h2>
                  A STAGE FOR <span className="break"></span> UNHEARD STORIES
                </h2>
                <h4>
                  Feel the power of <span className="color">cinematic</span>{" "}
                  connection
                </h4>
                <p>Unlimited movies, TV shows and more.</p>
                <div className="clickable_link">
                  <Link to="/register">Get Started</Link>
                </div>
                <div className="learn_more">
                  <a href="#theVideo">
                    <h6>Learn More</h6>
                    <img
                      src={require("../../assets/images/down_arrow.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="particlesss">
              <img
                src={require("../../assets/images/particles_header.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </header>
        <section className="video_section" id="theVideo">
          <div className="container">
            <div className="video_wrap">
              <img
                src={require("../../assets/images/video_screen.png")}
                className="img-fluid"
                alt=""
              />
              <div className="video_info">
                <div className="heading_gradient">
                  <h3>experiential & interactive</h3>
                </div>
                <div className="para_texts">
                  <p>
                    INDIE Sparxs is a social promotions platform for indie
                    movies. We leverage a sophisticated discovery engine to
                    connect our indie creatives with their audience and
                    potential distribution partners.
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
                      src={require("../../assets/images/play_button.png")}
                      className="img-fluid"
                      alt=""
                    />
                    <h6>WATCH NOW</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="be_real_wrap">
          <div className="container">
            <div className="contents">
              <div className="inner_contents">
                <div className="heading_gradient">
                  <h2>
                    We are pioneering next <span className="break"></span>
                    gen indie entertainment <span className="break"></span>
                    <span className="bold_texts">
                      while democratizing the<span className="break"></span>
                    </span>
                    <span className="bold_texts">
                      indie distribution process
                    </span>
                  </h2>
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
                    src={require("../../assets/images/mock_up1.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="mockup_mobile">
                  <img
                    src={require("../../assets/images/mock_up2.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="para_texts">
                  <p>
                    <span className="bold_texts">
                      We are the stage that connects filmmakers with
                      distributors
                    </span>{" "}
                    and we create a space for your stories to be heard without
                    the noise. As studios and OTT platforms begin closing their
                    systems to outside talent, new opportunities are a scarcity
                    to new independents. We are here for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overlap_benefits">
          <div className="particlesss">
            <img
              src={require("../../assets/images/particles_video.png")}
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
                      src={require("../../assets/images/dan-senior.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="image_2 single_image">
                    <img
                      src={require("../../assets/images/william-rouse.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="contents">
                  <div className="heading">
                    <h2>
                      Calling all <span className="bold_texts">creators!</span>
                    </h2>
                  </div>
                  <div className="yellow_texts">
                    <p>Independent Filmmakers, Producers, Artists</p>
                  </div>
                  <div className="para_texts">
                    <p>
                      We all know the math, audience equals revenue, but in
                      order to entice your audience, you need a platform that is
                      designed for your film. INDIE Sparxs was made by indie
                      creatives FOR indie creatives.
                    </p>
                    <br />
                    <p>
                      Join a platform that showcases your work in the best light
                      and start earning based on views, followers and shares
                    </p>
                  </div>
                  <div className="clickable_link">
                    <Link to="/register">Get Started</Link>
                  </div>
                  <div className="para_texts not_a_creator">
                    <p>
                      Not a Creator? <span className="break"></span> Learn more
                      about <Link to="/ciners">Ciners.</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="the_benefits">
            <div className="container">
              <div className="heading">
                <h2>
                  The <span className="bold_texts">benefits</span>
                </h2>
              </div>
              <div className="para_texts">
                <p>
                  As a <span className="color">Creator</span>, numbers are
                  needed to fundraise for your next project. Downloadable and
                  transparent analytics from your films’ performance on INDIE is
                  easily accessible for fundraising purposes or to show off that
                  you actually can make something people want to watch. These
                  analytics are available for our distribution partners to see
                  what is trending on INDIE. You don't have to sacrifice your
                  IP, you retain your rights.
                </p>
              </div>

              <div className="benefits">
                <div className="single_benefit">
                  <div className="icon">
                    <img
                      src={require("../../assets/images/huge_collection_icon.png")}
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
                      src={require("../../assets/images/watch_anywhere_icon.png")}
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
                      src={require("../../assets/images/make_money_icon.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="texts">
                    <h5>Make Money</h5>
                    <p>
                      Simply upload your creation, and start earning!{" "}
                      <span className="color">*</span>
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
                    src={require("../../assets/images/download_app.png")}
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
                    src={require("../../assets/images/choose_experience.png")}
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
                    src={require("../../assets/images/connect.png")}
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
              src={require("../../assets/images/particles_sign_up.png")}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="container">
            <div className="sign_up_wrap">
              <div className="set_account">
                <div className="texts grid_item">
                  <h6>Streaming is old news</h6>
                  <div className="heading">
                    <h2>Let’s talk about the experience!</h2>
                  </div>
                  <div className="para_texts">
                    <p>
                      Join us to submit your films, enjoy indie stories, and get
                      started in a new world of social streaming.
                    </p>
                  </div>
                </div>

                <div className="form_wrap">
                  <div className="sign_up_methods">
                    <form action="">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <div className="input_icon">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <i className="fas fa-eye-slash"></i>
                        </div>
                      </div>
                      <div className="submit_button">
                        <button type="button" className="btn sign_up_button">
                          SIGN UP
                        </button>
                      </div>
                    </form>

                    <div className="or">
                      <h6>or</h6>
                    </div>

                    <div className="alter_login">
                      <ul>
                        <li className="facebook">
                          <Link to="#">
                            <i className="fab fa-facebook"></i> Log in with
                            Facebook
                          </Link>
                        </li>
                        <li className="google">
                          <Link to="#">
                            <img
                              src={require("../../assets/images/google_icon.png")}
                              className="img-fluid"
                              alt=""
                            />{" "}
                            Log in with Google
                          </Link>
                        </li>
                        <li className="twitter">
                          <Link to="#">
                            <i className="fab fa-twitter"></i> Log in with
                            TWITTER
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="alert_texts">
                      <p>
                        By signing up you accept the{" "}
                        <Link to="#">Terms of Service</Link> and{" "}
                        <Link to="#">Privacy Policy</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="type_form">
                <div className="type_image">
                  <img
                    src={require("../../assets/images/typeform.png")}
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
                      How long will it take for my film to be approved?
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
                      What if my film hasn’t been at a festival?
                    </Link>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse contents"
                    data-parent="#theFaq"
                  >
                    <p>
                      You can still submit! Please be sure you do not want to
                      put your film in the festival circuit. Some film festivals
                      will disqualify your film if it has been streamed before
                      you have submitted it. If you are certain, Please upload
                      your film but it will take between 1-4 weeks of processing
                      time to make sure it meets our community guidelines.
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
                      Is INDIE Sparxs specific to one genre?
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
                          src={require("../../assets/images/subscribe_button.png")}
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
                        Please send a note directly to{" "}
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
                      <li>
                        <Link to="/jwp-upload">
                          <i className="fas fa-upload"></i>
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
