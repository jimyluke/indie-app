import React, { useState } from "react";

import { Row, Col, Label } from "reactstrap";
import { Button, Form, Input, Radio, Checkbox } from "antd";
import PhoneInput from "react-phone-input-2";
function Password() {
  const [value, setValue] = useState(1);

  const [phone, setPhone] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="support-password">
      <Row>
        <Col md={12} sm={12} className="support-title">
          Account access
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <div>
            <div className="support-font text-lable">
              Email address <span className="support-asterisk">*</span>
            </div>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item>
                <Label className="label-name">
                  Use an address you'll always have access to
                </Label>
                <Input
                  className="text-input"
                  placeholder="jane.snow@gmail.c|"
                />
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <div className="support-font text-lable">Phone number</div>
          <Form layout="vertical">
            <Form.Item>
              <Label className="label-name">Select your country code</Label>
              <PhoneInput
                className="text-input"
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12}>
          <div className="support-font text-lable">Change password</div>
          <Form layout="vertical">
            <Form.Item>
              <Label className="label-name">
                Current password <span className="support-asterisk">*</span>
              </Label>
              <Input
                className="text-input"
                placeholder="Enter current password"
              />
            </Form.Item>
            <Form.Item>
              <Label className="label-name">
                New password <span className="support-asterisk">*</span>
              </Label>
              <Input className="text-input" placeholder="Enter new password" />
            </Form.Item>
            <Form.Item>
              <Label className="label-name">
                Confirm new password <span className="support-asterisk">*</span>
              </Label>
              <Input
                className="text-input"
                placeholder="Confirm current password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox onChange={onChange} className="check-box">
                Require all devices to sign in with new password
              </Checkbox>
            </Form.Item>
          </Form>
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
            Save
          </Button>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-cancel"
            size="large"
          >
            Cancel
          </Button>
        </Col>
        <Col xs={0} md={6} sm={12} className="d-xs-none d-md-none d-lg-block" />
      </Row>
    </div>
  );
}

export default Password;
