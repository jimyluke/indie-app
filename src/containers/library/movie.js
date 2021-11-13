import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Tabs, Tooltip } from "antd";
import { FlagOutlined } from "@ant-design/icons";
import { Header, Footer } from "../../components/template";
import { fetchVideoById, filterVideoByGenre } from "../../actions/jwplayer";
import UniversalImg from "../../assets/images/homepage/universal.png";
import BruImg from "../../assets/images/general/brujas.png";
import { durationFormatter } from "../../utils/helper";
import SliderWrapper from "../../components/video/slider-wrapper";

const { TabPane } = Tabs;

class Movie extends Component {
  componentDidMount = () => {
    const { fetchVideoById, match } = this.props;
    const mediaId = match.params.media_id;
    fetchVideoById(mediaId);
  };

  componentDidUpdate = (prevProps) => {
    const { fetchVideoById, match } = this.props;
    if (
      prevProps.match.params.media_id !== match.params.media_id &&
      match.params.media_id
    ) {
      fetchVideoById(match.params.media_id);
    }
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
                <Row className="mt-4">
                  <Col md={6} sm={12}>
                    <h5>{curVideo.metadata.title}</h5>
                    <p>{curVideo.metadata.description}</p>
                    {curVideo.metadata.custom_params.award && (
                      <React.Fragment>
                        <h5 className="mt-5">Awards</h5>
                        <div className="awards-img">
                          <img
                            src={curVideo.metadata.custom_params.award}
                            alt=""
                          />
                        </div>
                      </React.Fragment>
                    )}
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
          <p className="video-detail-location">
            Austin, TX
            <Tooltip title="Report">
              <a className="ml-4" href="mailto:support@sparxstudio.com">
                <FlagOutlined />
              </a>
            </Tooltip>
          </p>
        </div>
        {curVideo && (
          <div
            className="detail-content"
            style={{
              backgroundImage: `url(${curVideo.metadata.custom_params.cover})`,
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
              <p style={{ maxWidth: "500px" }}>
                {curVideo.metadata.description}
              </p>
              <div className="m-flex mt-80">
                <a
                  className="material-btn"
                  href={`/videos/player/${curVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play
                </a>
                <button className="material-btn-empty" onClick={() => {}}>
                  Trailer
                </button>
              </div>
            </Container>
            {curVideo.metadata.custom_params.trivia && (
              <div className="trivia-block">
                <Container>
                  <div className="trivia-text">
                    {curVideo.metadata.custom_params.trivia}
                  </div>
                </Container>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="library-content">
          {this.renderDetailContent()}
          {this.renderFilms()}
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
