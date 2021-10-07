import React, { Component, useState } from "react";
import { connect } from "react-redux";
import ReactJWPlayer from "react-jw-player";
import { Header, Footer } from "../../components/template";
import { Button, Form, Input, Select, List } from "antd";
import { Col, Row } from "reactstrap";
import { fetchJWVideos } from "../../actions/jwplayer";
import { Link } from "react-router-dom";

const FilterForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    await onSubmit(`${values.query}:${values.value}`);
    setLoading(false);
  };

  const queries = ["title", "author", "tag", "category"];

  return (
    <Form name="org_register" onFinish={onFinish}>
      <div className="account-form-box">
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <span className="form-label">Query</span>
            <Form.Item
              name="query"
              rules={[
                {
                  required: true,
                  message: "Please select the query type!",
                },
              ]}
            >
              <Select size="large">
                {queries.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col md={6} sm={12}>
            <span className="form-label">Value</span>
            <Form.Item name="value">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        className="black-btn mt-4"
        loading={loading}
      >
        {loading ? "Fetching" : "Fetch Videos"}
      </Button>
    </Form>
  );
};

class VideoPlayer extends Component {
  state = {
    playlist: null,
    loading: false,
  };

  onReady = () => {
    document.getElementsByClassName("jw-player-wrapper")[0].id =
      "video-container"; // Need id to target the wx container
  };

  onSelectVideo = (item) => {
    this.setState({ playlist: `https://cdn.jwplayer.com/v2/media/${item.id}` });
  };

  render() {
    const { jwplayer } = this.props;
    // const { playlist } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="container content">
          <div className="video-list">
            <FilterForm onSubmit={this.props.fetchJWVideos} />
            <List
              itemLayout="horizontal"
              className="mt-4 video-listbox"
              dataSource={jwplayer.videos}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <img
                        src={`https://cdn.jwplayer.com/thumbs/${item.id}-320.jpg`}
                        width={100}
                        alt=""
                      />
                    }
                    title={
                      <Link onClick={() => this.onSelectVideo(item)}>
                        {item.metadata.title}
                      </Link>
                    }
                    description={item.metadata.description}
                  />
                </List.Item>
              )}
            />
          </div>
          <div
            className="container"
            data-mediaid="3mvXBqKq"
            style={{
              height: "100%",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
            }}
          >
            <ReactJWPlayer
              playerId="3mvXBqKq"
              playerScript="https://cdn.jwplayer.com/libraries/3mvXBqKq.js"
              playlist={"https://cdn.jwplayer.com/v2/playlists/ziytCMcj"}
              className="jw-player-wrapper"
              onReady={this.onReady}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.profile,
    fieldData: state.profile.fieldData,
    jwplayer: state.jwplayer,
  };
}

export default connect(mapStateToProps, { fetchJWVideos })(VideoPlayer);
