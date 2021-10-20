import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Tabs, Modal } from "antd";
import UploadForm from "./video-upload-form.js";
import EitForm from "./video-edit-form";
import { fetchMyVideos } from "../../../actions/jwplayer";
import { Header, Footer } from "../../../components/template";
import ProfileForm from "./profile-form";
import ProfileInfo from "./profile-info";
import image1 from "../../../assets/images/homepage-hero/1.png";
import image2 from "../../../assets/images/homepage-hero/2.png";
import image3 from "../../../assets/images/homepage-hero/3.png";

const { TabPane } = Tabs;

class Profile extends Component {
  state = {
    showModal: false,
    showEditModal: false,
    curVideo: {},
    isEdit: false,
  };

  componentDidMount = () => {
    this.props.fetchMyVideos();
  };

  renderFilmItem = (data) => (
    <div className="video-card">
      <img
        src={`https://cdn.jwplayer.com/thumbs/${data.id}-720.jpg`}
        alt="video preview"
        className="default-slide"
        onClick={() => this.openVideoModal(data)}
      />
      <Link to="#" onClick={() => this.openEditModal(data)}>
        Edit
      </Link>
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{data.metadata.title}</p>
          <p className="description">
            {data.metadata.custom_params.release_date} •{" "}
            {data.metadata.tags.join(", ")}
          </p>
        </div>
        <RightOutlined />
      </div>
    </div>
  );

  renderSimpleFilmItem = (data) => (
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

  toggleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  toggleUploadModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  openEditModal = (data) => {
    this.setState({ showEditModal: true, curVideo: data });
  };

  hideEditModal = () => {
    this.setState({ showEditModal: false, curVideo: {} });
  };

  renderFilms = () => {
    const { jwplayer, user } = this.props;
    const isCreator = user.role === "Creator";
    const recent_data = [
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
          <Tabs defaultActiveKey="1">
            {isCreator && (
              <TabPane tab="Uploaded Films" key="1">
                <Row>
                  {jwplayer.videos.map((item) => (
                    <Col xs={6} sm={6} md={6} lg={4} key={item.id}>
                      {this.renderFilmItem(item)}
                    </Col>
                  ))}
                  <Col xs={6} sm={6} md={6} lg={4} key={"new-film"}>
                    <div
                      className="video_upload"
                      onClick={this.toggleUploadModal}
                    >
                      Click to upload
                    </div>
                  </Col>
                </Row>
              </TabPane>
            )}
            <TabPane tab="Recently Watched Films" key={isCreator ? "2" : "1"}>
              <Row>
                {recent_data.map((item) => (
                  <Col xs={6} sm={6} md={6} lg={4} key={item.title}>
                    {this.renderSimpleFilmItem(item)}
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="Continue Watching" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Container>
      </div>
    );
  };

  render = () => {
    const { showModal, showEditModal, curVideo, isEdit } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="top-bordered-content">
          {!isEdit && <ProfileInfo toggleEdit={this.toggleEdit} />}
          {isEdit && <ProfileForm toggleEdit={this.toggleEdit} />}
          {this.renderFilms()}
          <div className="filmbox-blendcolor" />
          {showModal && (
            <Modal
              visible={showModal}
              centered
              width={800}
              footer={false}
              closable={false}
              className="modal-with-shadow"
            >
              <UploadForm onClose={this.toggleUploadModal} />
            </Modal>
          )}
          {showEditModal && (
            <Modal
              visible={showEditModal}
              centered
              width={700}
              footer={false}
              closable={false}
              className="modal-with-shadow"
            >
              <EitForm onClose={this.hideEditModal} data={curVideo} />
            </Modal>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    jwplayer: state.jwplayer,
    user: state.user.profile,
  };
};

export default connect(mapStateToProps, { fetchMyVideos })(Profile);
