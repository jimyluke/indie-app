import React, { Component } from "react";
import { CopyrightOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Logo from "../../../assets/images/general/INDIElogo.png";
import User from "../../../assets/images/general/user-avatar.png";
import history from "../../../history";

class Welcome extends Component {
  render() {
    const { user } = this.props;
    const name = user.profile ? user.profile.full_name : "friend";
    const userlogo = user.profile ? user.profile.photo : "";
    return (
      <div className="welcome">
        <div className="welcome-header">
          <img className="welcome-logo" src={Logo} alt="" />
          <div className="welcome-header-profile">
            <span>Hey there, {name}</span>
            <img src={userlogo || User} alt="" />
          </div>
        </div>
        <div className="welcome-content">
          <div className="content-box">
            <p>Welcome to</p>
            <p className="content-title">indie sparxs</p>
            <div className="content-circles">
              <div className="circle-box" onClick={() => history.push("/home")}>
                <div className="circle-bg">
                  <div className="bg" />
                  <div className="circle">Virtual Cinema</div>
                </div>
                <div className="circle-desc">
                  <span>now playing</span>
                  <span className="movie-title">the matrix</span>
                </div>
              </div>
              <div
                className="circle-box"
                onClick={() => history.push("/library")}
              >
                <div className="circle-bg">
                  <div className="bg" />
                  <div className="circle">Your library</div>
                </div>
                <div className="circle-desc">
                  <div className="library">friends online: 11</div>
                </div>
              </div>
              <div
                className="circle-box"
                onClick={() => history.push("/festival")}
              >
                <div className="circle-bg">
                  <div className="bg" />
                  <div className="circle">Film Festival</div>
                </div>
                <div className="circle-desc">
                  <span>
                    <b>Cannes Film Festival</b>
                  </span>
                  <span>May 11 - May 22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-footer">
          <CopyrightOutlined /> <span>2020-2021 Indie Sparxs</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.user.profile,
  };
}

export default connect(mapStateToProps, {})(Welcome);
