import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Select, Spin } from "antd";
import { DeleteOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { Col, Row } from "reactstrap";
import { ImageUpload } from "../../../components/template";
import { updateVideo, fetchMyVideos } from "../../../actions/jwplayer";
import { genres } from "../../../constants";
import { Link } from "react-router-dom";
import { durationFormatter } from "../../../utils/helper";

const EditForm = ({ onSubmit, onClose, data }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    values.id = data.id;
    await onSubmit(values);
    setLoading(false);
  };

  const onCloseForm = (e) => {
    e.preventDefault();
    onClose();
  };

  const initData = {
    title: data.metadata.title,
    description: data.metadata.description,
    genres: data.metadata.tags,
    duration: durationFormatter(data.duration),
    cast: data.metadata.custom_params.cast,
    director: data.metadata.custom_params.director,
    award: data.metadata.custom_params.award,
    release_date: data.metadata.custom_params.release_date,
  };

  const loadingIcon = (
    <Loading3QuartersOutlined style={{ fontSize: 20 }} spin />
  );

  return (
    <Form
      name="upload_video"
      onFinish={onFinish}
      initialValues={{ ...initData }}
    >
      <h5>
        <b>Update the details</b>
        <Link to="#" onClick={() => {}} className="video-delete-box">
          <DeleteOutlined /> delete
        </Link>
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
          <span className="form-label">Director</span>
          <Form.Item name="director">
            <Input size="large" />
          </Form.Item>
          <span className="form-label">Cast</span>
          <Form.Item name="cast">
            <Input.TextArea rows={5} size="large" />
          </Form.Item>
        </Col>
        <Col md={6} sm={12}>
          <span className="form-label">Release Date</span>
          <Form.Item name="release_date">
            <Input size="large" />
          </Form.Item>
          <span className="form-label">Description</span>
          <Form.Item name="description">
            <Input.TextArea rows={8} size="large" />
          </Form.Item>
          <div className="edit-award-box">
            <Form.Item name="award">
              <ImageUpload
                label="Browse your award to upload"
                cover="change award"
              />
            </Form.Item>
          </div>
        </Col>
      </Row>
      <div className="m-flex mt-4 mb-4">
        <button className="material-btn" type="submit" disabled={loading}>
          {loading && <Spin indicator={loadingIcon} className="mr-2" />}Save
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

class EditFormWrapper extends Component {
  onSubmitUpload = async (data) => {
    const { updateVideo, onClose, fetchMyVideos } = this.props;
    await updateVideo(data);
    setTimeout(fetchMyVideos, 3000);
    onClose();
  };

  render = () => {
    return (
      <div className="upload-form-box">
        <EditForm
          onSubmit={this.onSubmitUpload}
          onClose={this.props.onClose}
          data={this.props.data}
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

export default connect(mapStateToProps, { updateVideo, fetchMyVideos })(
  EditFormWrapper
);
