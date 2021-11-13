import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Select, Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Col, Row } from "reactstrap";
import { VideoUpload, ImageUpload } from "../../../components/template";
import { uploadVideo } from "../../../actions/jwplayer";
import { genres } from "../../../constants";

const UploadForm = ({ onSubmit, onClose }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    await onSubmit(values);
    setLoading(false);
  };

  const onCloseForm = (e) => {
    e.preventDefault();
    onClose();
  };

  const loadingIcon = (
    <Loading3QuartersOutlined style={{ fontSize: 20 }} spin />
  );

  return (
    <Form name="upload_video" onFinish={onFinish}>
      <h5>
        <b>Fill the details and upload your film</b>
      </h5>
      <Row className="mt-4">
        <Col md={6} sm={12}>
          <span className="form-label">Title</span>
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input the title!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <span className="form-label">Genre</span>
          <Form.Item
            name="genres"
            rules={[
              {
                required: true,
                message: "Please select the genres!",
              },
            ]}
          >
            <Select size="large" mode="multiple" allowClear>
              {genres.map((item) => (
                <Select.Option key={item.name} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <span className="form-label">Duration</span>
          <Form.Item name="duration">
            <Input size="large" />
          </Form.Item>
          <span className="form-label">Release Date</span>
          <Form.Item name="release_date">
            <Input size="large" />
          </Form.Item>
          <span className="form-label">Director</span>
          <Form.Item name="director">
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col md={6} sm={12}>
          <span className="form-label">Cast</span>
          <Form.Item name="cast">
            <Input.TextArea rows={4} size="large" />
          </Form.Item>
          <span className="form-label">Film Description (max 450 symbols)</span>
          <Form.Item
            name="description"
            rules={[
              {
                max: 450,
                message: "Value should be less than 450 character",
              },
            ]}
          >
            <Input.TextArea rows={4} size="large" />
          </Form.Item>
          <span className="form-label">Trivia Fact (max 160 symbols)</span>
          <Form.Item
            name="trivia"
            rules={[
              {
                max: 160,
                message: "Value should be less than 160 character",
              },
            ]}
          >
            <Input.TextArea rows={3} size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={6} xs={12}>
          <span className="form-label">Film</span>
          <Form.Item
            name="video"
            rules={[
              {
                required: true,
                message: "Video file is requried!",
              },
            ]}
          >
            <VideoUpload label="Browse your film to upload" />
          </Form.Item>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <span className="form-label">Cover</span>
          <Form.Item
            name="cover"
            rules={[
              {
                required: true,
                message: "Cover image is requried!",
              },
            ]}
          >
            <ImageUpload label="Browse your cover to upload" />
          </Form.Item>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <span className="form-label">Award</span>
          <Form.Item name="award">
            <ImageUpload label="Browse your award to upload" />
          </Form.Item>
        </Col>
      </Row>

      <div className="m-flex mt-4 mb-4">
        <button className="material-btn" type="submit" disabled={loading}>
          {loading && <Spin indicator={loadingIcon} className="mr-2" />}
          {loading ? "Uploading" : "Start Upload"}
        </button>
        <button
          className="material-btn-empty"
          style={{ color: "rgba(0, 0, 0, 0.5)" }}
          onClick={onCloseForm}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
};

class UploadFormWrapper extends Component {
  onSubmitUpload = async (data) => {
    const { uploadVideo, onClose } = this.props;
    await uploadVideo(data);
    onClose();
  };

  render = () => {
    return (
      <div className="upload-form-box">
        <UploadForm
          onSubmit={this.onSubmitUpload}
          onClose={this.props.onClose}
        />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.profile,
  };
}

export default connect(mapStateToProps, { uploadVideo })(UploadFormWrapper);
