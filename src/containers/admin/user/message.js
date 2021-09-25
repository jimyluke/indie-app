import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import { Radio, Button, Input, message } from "antd";
import RichTextEditor from "../../../components/pages/editor";
import { sendAllNotification } from "../../../actions/notification";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "participants",
      messageTxt: "",
      title: "",
      loading: false,
    };
  }

  onChangeMode = (e) => {
    this.setState({ mode: e.target.value });
  };

  onChangeMessage = (e) => {
    this.setState({ messageTxt: e });
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  sendMessage = async () => {
    const { mode, messageTxt, title } = this.state;
    const { sendAllNotification } = this.props;

    if (!mode || !messageTxt || !title) {
      message.warn("All field are not filled correctly");
      return;
    }
    this.setState({ loading: true });
    const data = { title, content: messageTxt };
    switch (mode) {
      case "participants":
        await sendAllNotification(data);
        this.setState({ loading: false });
        return;
      default:
        this.setState({ loading: false });
        return;
    }
  };

  render() {
    const { mode, messageTxt, title, loading } = this.state;
    return (
      <div className="content-admin">
        <Container>
          <Row>
            <Col className="flex">
              <h5 className="mr-auto">All Users</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Radio.Group
                className="mt-4 mb-4"
                onChange={this.onChangeMode}
                value={mode}
              >
                <Radio value={"participants"} checked>
                  All Users
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                className="mb-3"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <RichTextEditor
                placeholder="Message"
                onChange={this.onChangeMessage}
                value={messageTxt}
              />
              <Button
                className="mt-3"
                onClick={this.sendMessage}
                type="primary"
                disabled={loading}
              >
                Send Message
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(mapStateToProps, {
  sendAllNotification,
})(Message);
