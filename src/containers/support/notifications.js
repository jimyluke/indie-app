import React from "react";
import { Row, Col } from "reactstrap";
import { Form, Switch, Button } from "antd";

function Notifications(props) {
  return (
    <>
      <Row>
        <Col md={12} sm={12} className="support-title support-center">
          NOTIFICATIONS
        </Col>
      </Row>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={12} sm={12}>
          <div className="support-notify-item">
            <p className="support-notify-center">Email Notification</p>
            <Form.Item className="support-notify-center">
              <Switch checked />
            </Form.Item>
          </div>
          <div className="support-notify-item">
            <p className="support-notify-center">New Movie Releases</p>
            <Form.Item className="support-notify-center">
              <Switch />
            </Form.Item>
          </div>
          <div className="support-notify-item">
            <p className="support-notify-center">Watched Movie Updates</p>
            <Form.Item className="support-notify-center">
              <Switch checked />
            </Form.Item>
          </div>
          <div className="support-notify-item">
            <p className="support-notify-center">Indie Sparxs Updates</p>
            <Form.Item className="support-notify-center">
              <Switch />
            </Form.Item>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} className="support-center d-none d-md-block">
          <p className="support-notify-footer">
            <span className="support-asterisk">*</span>For help & support please
            sed voluptas ratione plof harum voluptatum asperiores volup tatum
            eli gendi ad omnis sim il ique lorem.
          </p>
        </Col>
        <Col className="support-btn-footer d-md-none" xs={12} md={12} sm={12} lg={12} style={{display:'flex',justifyContent:'center', paddingTop:'30px'}}>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save"
            size="large"
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Notifications;
