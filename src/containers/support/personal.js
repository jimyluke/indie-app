import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Button, Form, Input, Radio } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import avatar from "../../assets/images/supportpage/avar.png";

function Personal() {
  const [value, setValue] = useState(1);
  const [phone, setPhone] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Row className="support-center d-text-align-center">
        <Col md={12} sm={12} lg={6} className="support-title">
          PERSONAL INFORMATION
        </Col>
        <Col md={6} sm={12} lg={6} className="support-btn-right d-none d-lg-block ">
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save support-btn-right"
            size="large"
          >
            Save
          </Button>
        </Col>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <Col md={12} sm={12} className="support-ava">
          <img src={avatar} alt="avatar" />
          <p className="support-edit">Edit image</p>
        </Col>
        <Col md={12} sm={12} style={{ paddingLeft: "50px" }}>
          <Form layout="vertical">
            <Form.Item label="First name" required>
              <Input placeholder="Jane" />
            </Form.Item>
            <Form.Item label="Last name" required>
              <Input placeholder="Snow" />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="support-identify">
        <Col md={4} sm={12}>
          <p>How do you identify?</p>
        </Col>
        <Col md={8} sm={12}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>He/Him</Radio>
            <Radio value={2}>Her/She</Radio>
            <Radio value={3}>Them/They</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12} sm={12}>
          <div>
            <p>Date of birth</p>
          </div>
          <div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>He/Him</Radio>
              <Radio value={2}>Her/She</Radio>
              <Radio value={3}>Them/They</Radio>
            </Radio.Group>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12} sm={12}>
          <div>
            <p>
              Email address <span className="support-asterisk">*</span>
            </p>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item label="Use an address you'll always have access to">
                <Input placeholder="jane.snow@gmail.c|" />
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12} sm={12}>
          <Form layout="vertical">
            <Form.Item label="Select your country code">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={2} sm={12}>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save"
            size="large"
          >
            Save
          </Button>
        </Col>
        <Col md={2} sm={12}>
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-cancel"
            size="large"
          >
            Cancel
          </Button>
        </Col>
        <Col md={8} sm={12} />
      </Row>
    </>
  );
}

export default Personal;
