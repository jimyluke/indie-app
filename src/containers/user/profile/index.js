import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Tabs, Modal } from "antd";
import UploadForm from "./video-upload-form.js";
import EitForm from "./video-edit-form";
import { fetchMyVideos } from "../../../actions/jwplayer";
import { listWatch } from "../../../actions/watch";
import { Header, Footer } from "../../../components/template";
import ProfileForm from "./profile-form";
import ProfileInfo from "./profile-info";
import history from "../../../history";

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
    this.props.listWatch();
  };

  goToVideo = (mediaId) => {
    history.push(`/videos/${mediaId}`);
  };

  renderFilmItem = (data) => (
    <div className="video-card">
      <img
        src={data.metadata.custom_params.cover}
        alt="video preview"
        className="default-slide"
        onClick={() => this.goToVideo(data.id)}
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

  renderRecentFilms = () => {
    const { jwplayer } = this.props;

    const allVideos = jwplayer.all_videos;
    const recentWatches = jwplayer.mywatches || [];
    let recent_data = [];
    for (let watch of recentWatches) {
      let flt = allVideos.filter((item) => item.id === watch.media);
      if (flt.length > 0) recent_data.push(flt[0]);
    }
    return (
      <Row>
        {recent_data.map((item) => (
          <Col xs={6} sm={6} md={6} lg={4} key={item.id}>
            <div className="video-card">
              <img
                src={item.metadata.custom_params.cover}
                alt="video preview"
                className="default-slide"
                onClick={() => this.goToVideo(item.id)}
              />
              <div className="slide-footer">
                <div className="slide-footer__content">
                  <p className="title">{item.metadata.title}</p>
                  <p className="description">
                    {item.metadata.custom_params.release_date} •{" "}
                    {item.metadata.tags.join(", ")}
                  </p>
                </div>
                <RightOutlined />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

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
              {this.renderRecentFilms()}
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

export default connect(mapStateToProps, { fetchMyVideos, listWatch })(Profile);
