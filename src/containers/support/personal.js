import React from "react";
import { Row, Col, Label } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Button } from "antd";

import avatar from "../../assets/images/supportpage/avar.png";

function Personal() {
  return (
    <div className="support-personal">
      <Row className="support-center">
        <Col md={12} sm={12} className="support-title">
          PERSONAL INFORMATION
        </Col>
      </Row>
      <Row className="support-pt3">
        <Col md={12} sm={12} className="support-ava">
          <img src={avatar} alt="avatar" />
        </Col>
        <Col md={12} sm={12} className="support-inf">
          <div className="infor-name">Jane D. (She/Her)</div>
          <div className="infor-address">New England, CA</div>
        </Col>
      </Row>
      <Row>
        <Col className="support-btn-footer" xs={12} md={12} sm={12}>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save"
            size="large"
          >
            update personal details
          </Button>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-cancel"
            size="large"
          >
            delete account
          </Button>
        </Col>
        <Col xs={0} md={6} sm={12} className="d-xs-none d-md-none d-lg-block" />
      </Row>
    </div>
  );
}

export default Personal;
