import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import SliderWrapper from "../../components/video/slider-wrapper";
import { Header, Footer } from "../../components/template";
import { queryJWVideos, filterVideoByGenre } from "../../actions/jwplayer";
import history from "../../history";

class Library extends Component {
  state = {
    category: "",
  };

  componentDidMount = () => {
    const { queryJWVideos, location } = this.props;
    let filterStr = "";
    if (location.search) {
      const params = new URLSearchParams(location.search);
      let category = params.get("category");
      filterStr = `tags:${category}`;
      this.setState({ category });
    }
    queryJWVideos(filterStr);
  };

  goToVideo = (mediaId) => {
    history.push(`/videos/${mediaId}`);
  };

  renderFilmItem = (data) => (
    <div className="video-card">
      <img
        src={`https://cdn.jwplayer.com/thumbs/${data.id}-720.jpg`}
        alt="video preview"
        className="default-slide"
        onClick={() => this.goToVideo(data.id)}
      />
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

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
        {this.state.category && (
          <Breadcrumb.Item>{this.state.category}</Breadcrumb.Item>
        )}
      </Breadcrumb>
    </div>
  );

  render() {
    const { jwplayer, filterVideoByGenre } = this.props;
    const { category } = this.state;
    const featuredFilms = filterVideoByGenre("Horror");

    return (
      <React.Fragment>
        <Header />
        <div className="library-content">
          {this.renderBreadCrumb()}
          {category && (
            <div className="library-category">
              <h5 className="mb-3 mt-5">category &nbsp; | &nbsp; {category}</h5>
            </div>
          )}
          <SliderWrapper
            title="Featured Film"
            videos={featuredFilms}
            defaultSlide
          />
          <Container className="mt-5">
            <h5 className="mb-3">All Movies</h5>
            <Row style={{ minHeight: "70vh" }}>
              {jwplayer.all_videos.map((item) => (
                <Col xs={6} sm={6} md={6} lg={4} key={item.id}>
                  {this.renderFilmItem(item)}
                </Col>
              ))}
            </Row>
          </Container>
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

export default connect(mapStateToProps, { queryJWVideos, filterVideoByGenre })(
  Library
);
