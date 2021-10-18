import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb } from "antd";
import sampleUrl from "../../assets/images/general/user-avatar.png";
import image1 from "../../assets/images/homepage-hero/1.png";
import image2 from "../../assets/images/homepage-hero/2.png";
import image3 from "../../assets/images/homepage-hero/3.png";

class ProfileInfo extends Component {
  renderBreadCrumb = () => (
    <div className="auth-breadcrumb">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>View My Profile</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );

  renderUserInfo = () => {
    const { user } = this.props;
    const userInfo = user.profile;
    if (!userInfo) {
      return null;
    }
    return (
      <Container className="user-info">
        <div className="user-card">
          <Avatar src={userInfo.photo || sampleUrl} size={200} />
          <div className="user-card-desc">
            <h4>
              {userInfo.full_name}
              {userInfo.pronouns ? ` (${userInfo.pronouns})` : ""}
            </h4>
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
            <div className="user-info-value">
              <b>About me</b>
              <span>{userInfo.bio}</span>
            </div>
            <div className="user-info-value">
              <b>Favorite films</b>
              <span>{userInfo.films}</span>
            </div>
          </Col>
        </Row>
        <div className="m-flex mt-4">
          <button className="material-btn" onClick={() => {}}>
            Edit Profile
          </button>
          <button className="material-btn-empty" onClick={() => {}}>
            Delete Profile
          </button>
        </div>
      </Container>
    );
  };

  renderFilmItem = (data) => (
    <div className="video-card">
      <img src={data.image} alt="video preview" className="default-slide" />
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{data.title}</p>
          <p className="description">{data.description}</p>
        </div>
        <RightOutlined />
      </div>
    </div>
  );

  renderFilms = () => {
    const data = [
      {
        image: image1,
        title: "Beauty and the Beast",
        description: "1994 • Crime, Drama",
      },
      {
        image: image2,
        title: "Las Brujas",
        description: "1994 • Crime, Drama",
      },
      {
        image: image3,
        title: "Sylvie’s Love",
        description: "1994 • Crime, Drama",
      },
    ];
    return (
      <div className="profile-filmbox">
        <Container>
          <Row>
            {data.map((item) => (
              <Col md={6} lg={4} key={item.title}>
                {this.renderFilmItem(item)}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };

  render = () => {
    return (
      <div className="top-bordered-content">
        {this.renderBreadCrumb()}
        {this.renderUserInfo()}
        {this.renderFilms()}
        <div className="filmbox-blendcolor" />
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
  };
};

export default connect(mapStateToProps, {})(ProfileInfo);
