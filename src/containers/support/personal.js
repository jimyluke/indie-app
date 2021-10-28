import React, { useState } from "react";
import { Row, Col, Label } from "reactstrap";
import { Button, Form, Input, Radio, Checkbox } from "antd";
import PhoneInput from "react-phone-input-2";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import "react-phone-input-2/lib/style.css";

import avatar from "../../assets/images/supportpage/avar.png";

function Personal() {
  const [value, setValue] = useState(1);
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="support-personal">
      <Row className="support-center">
        <Col md={12} sm={12} className="support-title">
          PERSONAL INFORMATION
        </Col>
      </Row>
      <Row className="support-pt3">
        <Col md={12} sm={12} lg={4} className="support-ava">
          <img src={avatar} alt="avatar" />
          <p className="support-edit">Edit image</p>
        </Col>
        <Col md={12} sm={12} lg={8} class="support-input">
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
        <Col md={4} sm={12} style={{ paddingRight: "0" }}>
          <div className="support-identify-title">How do you identify?</div>
        </Col>
        <Col md={8} sm={12} style={{ paddingLeft: "5", paddingRight: "0" }}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1} size="small">
              He/Him
            </Radio>
            <span className="support-br" />
            <Radio value={2}>Her/She</Radio>
            <span className="support-br" />
            <Radio value={3}>Them/They</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12} sm={12}>
          <div class="support-font">Date of birth</div>
          <div className="support-picker">
            <div className="support-picker-month">
              <div className="support-picker-label">Month</div>
              <MonthPicker
                defaultValue="Select"
                numeric
                short
                caps
                endYearGiven
                year={year}
                required={true}
                value={month}
                onChange={(month) => setMonth(month)}
                id={"month"}
                name={"month"}
              />
            </div>
            <div className="support-picker-day">
              <div className="support-picker-label">Day</div>
              <DayPicker
                defaultValue="Select"
                year={year}
                month={month}
                endYearGiven
                required={true}
                value={day}
                onChange={(day) => setDay(day)}
                id={"day"}
                name={"day"}
              />
            </div>
            <div className="support-picker-year">
              <div className="support-picker-label">Year</div>
              <YearPicker
                defaultValue="Select"
                label="year"
                start={1960}
                reverse
                required={true}
                value={year}
                onChange={(year) => setYear(year)}
                id={"year"}
                name={"year"}
              />
            </div>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default Personal;
