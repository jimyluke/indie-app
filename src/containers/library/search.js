import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import SliderWrapper from "../../components/video/slider-wrapper";
import { Header, Footer } from "../../components/template";
import { filterVideoByGenre } from "../../actions/jwplayer";
import history from "../../history";
import EmptyBottle from "../../assets/images/general/empty_bottle.svg";

class Search extends Component {
  state = {
    query: "",
  };

  componentDidMount = () => {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    this.setState({ query });
  };

  goToVideo = (mediaId) => {
    history.push(`/videos/${mediaId}`);
  };

  renderFilmItem = (data) => (
    <div className="video-card wide-card">
      <img
        src={data.custom.cover}
        alt="video preview"
        className="default-slide"
        onClick={() => this.goToVideo(data.key)}
      />
      <div className="slide-footer">
        <div className="slide-footer__content">
          <p className="title">{data.title}</p>
          <p className="description">
            {data.custom.release_date} • {data.tags}
          </p>
        </div>
        <RightOutlined />
      </div>
    </div>
  );

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Search</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );

  render() {
    const { jwplayer, filterVideoByGenre } = this.props;
    const trendingFilms = filterVideoByGenre("Kids");
    const searchFilms = jwplayer.search_videos;
    return (
      <React.Fragment>
        <Header search={this.state.query} />
        <div className="library-content">
          {this.renderBreadCrumb()}
          {searchFilms.length === 0 && (
            <div className="empty-search">
              <img src={EmptyBottle} alt="" />
              <p>Your search did not have any matches</p>
            </div>
          )}
          {searchFilms.length > 0 && (
            <Container className="mt-5">
              <h5 className="mb-3">SEARCH RESULTS</h5>
              <Row style={{ minHeight: "200px" }}>
                {jwplayer.search_videos.map((item) => (
                  <Col xs={6} key={item.key}>
                    {this.renderFilmItem(item)}
                  </Col>
                ))}
              </Row>
            </Container>
          )}
          <SliderWrapper title="Trending Now" videos={trendingFilms} />
          <SliderWrapper title="Just Added" videos={jwplayer.all_videos} />
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

export default connect(mapStateToProps, { filterVideoByGenre })(Search);
