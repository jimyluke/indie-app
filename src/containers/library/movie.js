import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Tabs, Modal } from "antd";
import { Header, Footer } from "../../components/template";
import { fetchVideoById, filterVideoByGenre } from "../../actions/jwplayer";
import UniversalImg from "../../assets/images/homepage/universal.png";
import BruImg from "../../assets/images/general/brujas.png";
import { durationFormatter } from "../../utils/helper";
import SinglePlayer from "../../components/video/single-player";
import SliderWrapper from "../../components/video/slider-wrapper";

const { TabPane } = Tabs;

class Movie extends Component {
  state = {
    showVideoModal: false,
  };

  toggleVideoModal = () => {
    this.setState({ showVideoModal: !this.state.showVideoModal });
  };

  componentDidMount = () => {
    const { fetchVideoById, match } = this.props;
    const mediaId = match.params.media_id;
    fetchVideoById(mediaId);
  };

  renderFilms = () => {
    const { filterVideoByGenre, jwplayer } = this.props;
    const curVideo = jwplayer.curVideo;
    let suggestFilms = [];
    if (curVideo) suggestFilms = filterVideoByGenre(curVideo.metadata.tags[0]);

    return (
      <div className="profile-filmbox">
        <Container>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Suggested" key="1">
              <SliderWrapper
                title="Suggested"
                videos={suggestFilms}
                disableLabel
              />
            </TabPane>
            <TabPane tab="Extras" key="2">
              <SliderWrapper
                title="Extras"
                videos={suggestFilms}
                disableLabel
              />
            </TabPane>
            <TabPane tab="Details" key="3">
              {curVideo && (
                <Row className="mt-5">
                  <Col md={6} sm={12}>
                    <h5>{curVideo.metadata.title}</h5>
                    <p>{curVideo.metadata.description}</p>
                  </Col>
                  <Col md={6} sm={12} className="p-4">
                    <Row>
                      <Col xs={6}>
                        <div className="detail-value-box">
                          <p>duration:</p>
                          <span>{durationFormatter(curVideo.duration)}</span>
                        </div>
                        <div className="detail-value-box">
                          <p>release date:</p>
                          <span>
                            {curVideo.metadata.custom_params.release_date}
                          </span>
                        </div>
                        <div className="detail-value-box">
                          <p>genre:</p>
                          <span>{curVideo.metadata.tags.join(", ")}</span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="detail-value-box">
                          <p>director:</p>
                          <span>
                            {curVideo.metadata.custom_params.director}
                          </span>
                        </div>
                        <div className="detail-value-box">
                          <p>cast:</p>
                          <pre>{curVideo.metadata.custom_params.cast}</pre>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}
            </TabPane>
          </Tabs>
        </Container>
      </div>
    );
  };

  renderDetailContent = () => {
    const curVideo = this.props.jwplayer.curVideo;
    return (
      <div className="video-detail">
        <div className="detail-head">
          <img src={UniversalImg} alt="" />
          <p className="video-detail-location">Los angeles, ca</p>
        </div>
        {curVideo && (
          <div
            className="detail-content"
            style={{
              backgroundImage: `url(https://cdn.jwplayer.com/thumbs/${curVideo.id}-720.jpg)`,
            }}
          >
            <Container>
              <img src={BruImg} alt="" />
              <p className="mt-4" style={{ fontSize: "14px" }}>
                <b>
                  {curVideo.metadata.custom_params.release_date} &nbsp; • &nbsp;{" "}
                  {durationFormatter(curVideo.duration)} &nbsp; • &nbsp;{" "}
                  {curVideo.metadata.tags.join(", ")}
                </b>
              </p>
              <p>{curVideo.metadata.description}</p>
              <div className="m-flex mt-5">
                <button
                  className="material-btn"
                  onClick={this.toggleVideoModal}
                >
                  Play
                </button>
                <button className="material-btn-empty" onClick={() => {}}>
                  Trailer
                </button>
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { showVideoModal } = this.state;
    const curVideo = this.props.jwplayer.curVideo;
    return (
      <React.Fragment>
        <Header />
        <div className="library-content">
          {this.renderDetailContent()}
          {this.renderFilms()}
          {showVideoModal && (
            <Modal
              title={curVideo.metadata.title}
              visible={showVideoModal}
              centered
              width={800}
              footer={false}
              onCancel={this.toggleVideoModal}
              className="modal-with-shadow"
            >
              <SinglePlayer playerId="3mvXBqKq" mediaId={curVideo.id} />
            </Modal>
          )}
        </div>
        <div className="homepage-blendcolor" />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jwplayer: state.jwplayer,
    user: state.user.profile,
  };
};

export default connect(mapStateToProps, { fetchVideoById, filterVideoByGenre })(
  Movie
);
