import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Modal, Row, Tooltip, Spin, Input, message } from "antd";
import { fetchVideoById, reportVideo } from "../../actions/jwplayer";
import { createWatch } from "../../actions/watch";
import ReactJWPlayer from "react-jw-player";
import {
  InfoCircleOutlined,
  MessageOutlined,
  ShareAltOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { ReportForm } from "./forms";
import { durationFormatter } from "../../utils/helper";
import Logo from "../../assets/images/general/INDIElogo.png";
import Telegram from "../../assets/images/general/telegram.svg";
import EmailIcon from "../../assets/images/general/e-mail.svg";

class MoviePlayer extends Component {
  state = {
    loaded: false,
    infoModal: false,
    reportModal: false,
    shareModal: false,
  };

  componentDidMount = () => {
    const { fetchVideoById, match } = this.props;
    const mediaId = match.params.media_id;
    fetchVideoById(mediaId);
  };

  onReady = () => {
    document.getElementsByClassName("jw-player-wrapper")[0].id =
      "video-container"; // Need id to target the wx container
  };

  onLoaded = () => {
    this.setState({ loaded: true });
    const { createWatch, user, match } = this.props;
    if (!user.profile) return;
    const mediaId = match.params.media_id;
    createWatch(mediaId);
  };

  toggleInfoModal = () => {
    this.setState({ infoModal: !this.state.infoModal });
  };

  toggleReportModal = () => {
    this.setState({ reportModal: !this.state.reportModal });
  };

  toggleShareModal = () => {
    this.setState({ shareModal: !this.state.shareModal });
  };

  onReport = async (values) => {
    const { jwplayer, user, reportVideo } = this.props;
    values.url = window.location.href;
    values.film = jwplayer.curVideo.metadata.title;
    values.user = user.profile ? user.profile.full_name : "Anonymous";
    await reportVideo(values);
    this.toggleReportModal();
  };

  copyLink = (value) => {
    navigator.clipboard.writeText(value);
    message.success("Copied!");
  };

  renderDetails = () => {
    const curVideo = this.props.jwplayer.curVideo;
    return (
      <div className="film-details">
        <h5>
          <b>Film details</b>
        </h5>
        <Row gutter={30}>
          <Col sm={14} xs={24}>
            <img
              src={curVideo.metadata.custom_params.cover}
              alt=""
              className="mb-3"
            />
            <div className="detail-title">{curVideo.metadata.title}</div>
            <p>{curVideo.metadata.description}</p>
            <p>{curVideo.metadata.custom_params.trivia}</p>
          </Col>
          <Col sm={10} xs={24}>
            <div className="detail-title">DIRECTOR:</div>
            <p>{curVideo.metadata.custom_params.director}</p>
            <div className="detail-title">CAST:</div>
            <pre>{curVideo.metadata.custom_params.cast}</pre>
            <div className="detail-title">DURATION:</div>
            <p>{durationFormatter(curVideo.duration)}</p>
            <div className="detail-title">RELEASE DATE:</div>
            <p>{curVideo.metadata.custom_params.release_date}</p>
            <div className="detail-title">GENRE:</div>
            <p>{curVideo.metadata.tags.join(", ")}</p>
          </Col>
        </Row>
      </div>
    );
  };

  renderReport = () => {
    return (
      <div className="film-details">
        <h5>
          <b>Report an issue</b>
        </h5>
        <ReportForm
          onSubmit={this.onReport}
          onCancel={this.toggleReportModal}
        />
      </div>
    );
  };

  renderShare = () => {
    return (
      <div className="film-details">
        <h5>
          <b>Share with</b>
        </h5>
        <div className="share-icons">
          <div className="share-icon">
            <div className="icon">
              <img src={Telegram} alt="" />
            </div>
            <span>Telegram</span>
          </div>
          <div className="share-icon">
            <div className="icon">
              <TwitterOutlined />
            </div>
            <span>Twitter</span>
          </div>
          <div className="share-icon">
            <div className="icon">
              <WhatsAppOutlined />
            </div>
            <span>Whatsapp</span>
          </div>
          <div className="share-icon">
            <div className="icon">
              <img src={EmailIcon} alt="" />
            </div>
            <span>E-mail</span>
          </div>
          <div className="share-icon">
            <div className="icon">
              <ShareAltOutlined />
            </div>
            <span>More</span>
          </div>
        </div>
        <div className="copy-link">
          <p>Or share with link</p>
          <Input
            placeholder={window.location.href}
            size="large"
            suffix={
              <CopyOutlined
                onClick={() => this.copyLink(window.location.href)}
              />
            }
            disabled
          />
        </div>
      </div>
    );
  };

  render() {
    const curVideo = this.props.jwplayer.curVideo;
    const playerId = "3mvXBqKq";
    const mediaId = curVideo ? curVideo.id : "";
    const { infoModal, loaded, reportModal, shareModal } = this.state;
    return (
      <div className="player-container">
        {!curVideo && <Spin tip="Loading ..." />}
        {curVideo && (
          <div className="player-box">
            <ReactJWPlayer
              playerId={playerId}
              playerScript={`https://cdn.jwplayer.com/libraries/${playerId}.js`}
              playlist={`https://cdn.jwplayer.com/v2/media/${mediaId}`}
              className="jw-player-wrapper"
              onReady={this.onReady}
              onVideoLoad={this.onLoaded}
            />
            {loaded && (
              <React.Fragment>
                <div className="control-btn logo">
                  <img src={Logo} alt="" />
                </div>
                <Tooltip title="Details">
                  <div
                    className="control-btn info"
                    onClick={this.toggleInfoModal}
                  >
                    <InfoCircleOutlined className="mr-1" />{" "}
                    {curVideo.metadata.title}
                  </div>
                </Tooltip>
                <Tooltip title="Report">
                  <div
                    className="control-btn report"
                    onClick={this.toggleReportModal}
                  >
                    <MessageOutlined />
                  </div>
                </Tooltip>
                <Tooltip title="Share">
                  <div
                    className="control-btn share"
                    onClick={this.toggleShareModal}
                  >
                    <ShareAltOutlined />
                  </div>
                </Tooltip>
              </React.Fragment>
            )}
          </div>
        )}
        {infoModal && (
          <Modal
            visible={infoModal}
            centered
            width={600}
            footer={false}
            onCancel={this.toggleInfoModal}
            className="modal-with-shadow"
          >
            {this.renderDetails()}
          </Modal>
        )}
        {reportModal && (
          <Modal
            visible={reportModal}
            centered
            width={800}
            footer={false}
            onCancel={this.toggleReportModal}
            className="modal-with-shadow"
          >
            {this.renderReport()}
          </Modal>
        )}
        {shareModal && (
          <Modal
            visible={shareModal}
            centered
            width={600}
            footer={false}
            onCancel={this.toggleShareModal}
            className="modal-with-shadow"
          >
            {this.renderShare()}
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
    jwplayer: state.jwplayer,
  };
};

export default connect(mapStateToProps, {
  fetchVideoById,
  reportVideo,
  createWatch,
})(MoviePlayer);
