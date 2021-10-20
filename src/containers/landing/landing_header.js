import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal } from "antd";
import LoginForm from "../auth/login_form";
import { loginUser } from "../../actions/auth";
import history from "../../history";

class LandingHeader extends Component {
  state = {
    showModal: false,
  };

  openLoginModal = () => {
    const { authenticated } = this.props;
    if (authenticated) {
      history.push("/home");
      return;
    }
    this.setState({ showModal: true });
  };

  hideLoginModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <header className="header">
        <div className="overlay">
          <div className="container-fluid">
            <div className="logo_login">
              <div className="logo">
                <Link to="/">
                  <img
                    src={require("../../assets/images/general/INDIElogo.png")}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="login grid_item">
                <Link to="#" onClick={this.openLoginModal}>
                  LOG IN
                </Link>
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
                    src={require("../../assets/images/landing/down_arrow.png")}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="particlesss">
            <img
              src={require("../../assets/images/landing/particles_header.png")}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        {showModal && (
          <Modal
            visible={showModal}
            centered
            width={500}
            footer={false}
            className="modal-with-shadow"
            onCancel={this.hideLoginModal}
          >
            <LoginForm onSubmit={this.props.loginUser} />
          </Modal>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { loginUser })(LandingHeader);
