import React from "react";
import { Row, Col } from "reactstrap";
import { Form, Input, Button } from "antd";

function Invite() {
  return (
    <div className="support-invite">
      <Row>
        <Col md={12} sm={12} className=" support-invite-title">
          INVITE FRIENDS
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} className="support-invite-desc">
          Add friend and watch movies together!
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} className="support-invite-content">
          <p>
            Get your referral link with one click and share it via social media,
            emails or simply with your friends & family.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <p className="support-invite-referral">Referral link</p>
        </Col>
      </Row>
      <Row>
        <Col md={9} sm={9}>
          <Form.Item>
            <Input
              placeholder="https://invite.india/promo/id_1938569"
              size="large"
            />
          </Form.Item>
        </Col>
        <Col md={3} sm={9}>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-copy"
            size="large"
          >
            Copy
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Invite;
