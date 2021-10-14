import React from "react";
import { Row, Col } from "reactstrap";
import { Form, Switch } from "antd";

function Notifications(props) {
  return (
    <>
      <Row>
        <Col md={12} sm={12} className="support-title support-center">
          NOTIFICATIONS
        </Col>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
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
        <Col md={12} sm={12} className="support-center">
          <p className="support-notify-footer">
            <span className="support-asterisk">*</span>For help & support please
            sed voluptas ratione plof harum voluptatum asperiores volup tatum
            eli gendi ad omnis sim il ique lorem.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Notifications;
