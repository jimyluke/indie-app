import React, { Component, useState } from "react";
import { Button, Form, Input, Upload, Radio, Select } from "antd";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { Header, Footer } from "../../components/template";
import { UploadOutlined } from "@ant-design/icons";
import { uploadVideo, uploadVideoFromURL } from "../../actions/jwplayer";
import history from "../../history";
import { categories } from "../../constants/jwplayer";

const UploadForm = ({ props, onSubmit, uploading, onSubmitURL }) => {
  const [formtype, setFormType] = useState("file");

  const onFinish = (values) => {
    if (formtype === "file") onSubmit(values);
    if (formtype === "url") onSubmitURL(values);
    return;
  };

  const onChangeFormType = (e) => {
    setFormType(e.target.value);
  };

  const getDisable = () => {
    if (formtype === "file" && props.fileList.length === 0) return true;
    return false;
  };

  return (
    <Form name="org_register" onFinish={onFinish}>
      <div className="account-form-box">
        <Row className="mt-4">
          <Col md={6} sm={12}>
            <Radio.Group onChange={onChangeFormType} value={formtype}>
              <Radio value={"file"}>File Upload</Radio>
              <Radio value={"url"}>Fetch Video URL</Radio>
            </Radio.Group>
          </Col>
          <Col md={6} sm={12}>
            {formtype === "file" && (
              <Upload {...props}>
                <Button
                  icon={<UploadOutlined />}
                  disabled={props.fileList.length > 0}
                >
                  Select Video File
                </Button>
              </Upload>
            )}
            {formtype !== "file" && (
              <React.Fragment>
                <span className="form-label">Video URL*</span>
                <Form.Item
                  name="video_url"
                  rules={[
                    {
                      required: true,
                      message: "Please input the video url!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </React.Fragment>
            )}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} sm={12}>
            <span className="form-label">Title*</span>
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
          </Col>
          <Col md={6} sm={12}>
            <span className="form-label">Author</span>
            <Form.Item name="author">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <span className="form-label">Description</span>
        <Form.Item name="description">
          <Input.TextArea rows={2} size="large" />
        </Form.Item>
        <Row>
          <Col md={6} sm={12}>
            <span className="form-label">Permalink</span>
            <Form.Item name="permalink">
              <Input size="large" placeholder="https://" />
            </Form.Item>
          </Col>
          <Col md={6} sm={12}>
            <span className="form-label">Category</span>
            <Form.Item name="category">
              <Select size="large">
                {categories.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        disabled={getDisable()}
        loading={uploading}
        className="black-btn mt-4"
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </Form>
  );
};

class UploadPage extends Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = async (data) => {
    const { fileList } = this.state;
    this.setState({ uploading: true });
    await this.props.uploadVideo(fileList, data);
    this.setState({ fileList: [], uploading: false });
    history.push("/jwp-player");
  };

  handleURLUpload = async (data) => {
    console.log("data", data);
    this.setState({ uploading: true });
    await this.props.uploadVideoFromURL(data);
    this.setState({ uploading: false });
    history.push("/jwp-player");
  };

  render = () => {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      listType: "picture",
      fileList,
    };

    return (
      <React.Fragment>
        <Header />
        <div className="container content">
          <UploadForm
            onSubmit={this.handleUpload}
            onSubmitURL={this.handleURLUpload}
            props={props}
            uploading={uploading}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.profile,
    fieldData: state.profile.fieldData,
  };
}

export default connect(mapStateToProps, { uploadVideo, uploadVideoFromURL })(
  UploadPage
);
