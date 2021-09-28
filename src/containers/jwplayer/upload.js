import React, { Component } from "react";
import { Button, Form, Input, Upload } from "antd";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { Header, Footer } from "../../components/template";
import { UploadOutlined } from "@ant-design/icons";
import { uploadVideo } from "../../actions/jwplayer";

const UploadForm = ({ props, onSubmit, uploading }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form name="org_register" onFinish={onFinish}>
      <div className="account-form-box">
        <Row className="mt-4">
          <Col md={6} sm={12}>
            <Upload {...props}>
              <Button
                icon={<UploadOutlined />}
                disabled={props.fileList.length > 0}
              >
                Select Video File
              </Button>
            </Upload>
          </Col>
        </Row>
        <Row className="mt-5">
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
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col md={6} sm={12}>
            <span className="form-label">Category</span>
            <Form.Item name="category">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
      </div>

      <Button
        type="primary"
        htmlType="submit"
        disabled={props.fileList.length === 0}
        loading={uploading}
        className="black-btn mt-4"
        style={{ float: "right" }}
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
    this.setState({
      uploading: true,
    });

    await this.props.uploadVideo(fileList, data);
    this.setState({ fileList: [], uploading: false });
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

export default connect(mapStateToProps, { uploadVideo })(UploadPage);
