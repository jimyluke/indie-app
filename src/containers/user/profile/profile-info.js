import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import { Avatar, Breadcrumb, Spin } from "antd";
import sampleUrl from "../../../assets/images/general/user-avatar.png";
import TwitterIcon from "../../../assets/images/general/twitter_icon.svg";
import YoutubeIcon from "../../../assets/images/general/youtube_icon.svg";
import InstagramIcon from "../../../assets/images/general/instram_icon.svg";

class ProfileInfo extends Component {
  renderSpin = () => (
    <div className="center">
      <Spin size="large" />
    </div>
  );

  render = () => {
    const { user, toggleEdit } = this.props;
    const userInfo = user.profile || {};
    const isCreator = user.role === "Creator";

    return (
      <React.Fragment>
        <div className="auth-breadcrumb">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>View My Profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Container className="user-info">
          {!userInfo.full_name && this.renderSpin()}
          <div className="user-card">
            <Avatar src={userInfo.photo || sampleUrl} size={200} />
            <div className="user-card-desc">
              <h4>
                {userInfo.full_name}
                {userInfo.pronouns ? ` (${userInfo.pronouns})` : ""}
              </h4>
              {isCreator && (
                <b style={{ color: "#aaa" }}>
                  {userInfo.credit}
                  <br />
                </b>
              )}
              <b>{userInfo.location}</b>
            </div>
          </div>
          <Row className="mt-5">
            <Col md={6} sm={12}>
              <div className="user-info-value">
                <b>Username</b>
                <span>{userInfo.full_name}</span>
              </div>
              <div className="user-info-value">
                <b>Pronouns</b>
                <span>{userInfo.pronouns}</span>
              </div>
              {isCreator && (
                <div className="user-info-value">
                  <b>On-Screen Credit</b>
                  <span>{userInfo.credit}</span>
                </div>
              )}
              <div className="user-info-value">
                <b>Language</b>
                <span>{userInfo.language}</span>
              </div>
              <div className="user-info-value">
                <b>Location</b>
                <span>{userInfo.location}</span>
              </div>
            </Col>
            <Col md={6} sm={12}>
              {!isCreator && (
                <div className="user-info-value">
                  <b>About me</b>
                  <span>{userInfo.bio}</span>
                </div>
              )}
              <div className="user-info-value">
                <b>Favorite films</b>
                <span>{userInfo.films}</span>
              </div>
              {isCreator && (
                <React.Fragment>
                  <div className="user-info-value">
                    <b>Favorite genre</b>
                    <span>{userInfo.genre}</span>
                  </div>
                  <div className="user-info-value">
                    <b>Social media</b>
                    <span>
                      {userInfo.twitter && (
                        <a
                          href={userInfo.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="social-icon"
                            src={TwitterIcon}
                            alt=""
                          />
                        </a>
                      )}
                      {userInfo.youtube && (
                        <a
                          href={userInfo.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="social-icon"
                            src={YoutubeIcon}
                            alt=""
                          />
                        </a>
                      )}
                      {userInfo.instagram && (
                        <a
                          href={userInfo.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="social-icon"
                            src={InstagramIcon}
                            alt=""
                          />
                        </a>
                      )}
                    </span>
                  </div>
                </React.Fragment>
              )}
            </Col>
          </Row>
          <div className="m-flex mt-4">
            <button className="material-btn" onClick={toggleEdit}>
              Edit Profile
            </button>
            <button className="material-btn-empty" onClick={() => {}}>
              Delete Profile
            </button>
          </div>
        </Container>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
  };
};

export default connect(mapStateToProps, {})(ProfileInfo);
