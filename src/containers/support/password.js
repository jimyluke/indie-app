import React from "react";
import { Row, Col } from "reactstrap";
import { Button, Form, Input } from "antd";

function Password(props) {
  return (
    <>
      <Row>
        <Col md={12} sm={12} className="support-title support-center">
          PASSWORD & SECURITY
        </Col>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <Col md={12} sm={12}>
          <Form layout="vertical">
            <Form.Item label="Current password" required>
              <Input placeholder="Enter current password" size="large" />
            </Form.Item>
            <Form.Item label="New password" required>
              <Input placeholder="Enter new password" size="large" />
            </Form.Item>
            <Form.Item label="Confirm new password" required>
              <Input placeholder="Confirm new password" size="large" />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} className="support-center">
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save"
            size="large"
          >
            Save
          </Button>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-cancel support-invite-cancel"
            size="large"
          >
            Cancel
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Password;
