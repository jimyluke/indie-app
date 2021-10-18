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
          <div>
            Get your referral link with one click and share it via social media,
            emails or simply with your friends & family.
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <div className="support-invite-desc">Referral link</div>
        </Col>
      </Row>
      <Row>
        <Col xs={9} md={9} sm={9}>
          <Form.Item>
            <Input
              placeholder="https://invite.india/promo/id_1938569"
              size="large"
            />
          </Form.Item>
        </Col>
        <Col xs={3} md={3} sm={9} className="support-invite-pl0 support-invite-pl15">
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-copy support-invite-copy"
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
