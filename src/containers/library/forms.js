import React from "react";
import { Form, Input, Checkbox, Row, Col, message } from "antd";
import { ImageUpload } from "../../components/template";

const ReportCases = [
  {
    name: "Video Problem",
    description: "Blurry, cuts out, or looks strange in some way",
  },
  {
    name: "Buffering or connection problem",
    description:
      "Missing, hard to read, not matched with sound, isspellings, or poor translations",
  },
  {
    name: "Sound Problem",
    description:
      "Hard to hear, not matched woth video, or missing in some parts",
  },
  {
    name: "Inappropriate content",
    description: "Nudity, violence, abuse",
  },
  {
    name: "Subtitles or caption problem",
    description:
      "Missing, hard to read, not matched with sound, isspellings, or poor translations",
  },
  {
    name: "Legal Issue",
    description:
      "Copyright infringement (someone copied my creation), Privacy (someone is using my image)",
  },
];

export const ReportForm = ({ onSubmit, onCancel }) => {
  const onFinish = (values) => {
    if (!values.cases && !values.description && !values.screenshot) {
      message.error("You didn't provide any report content!");
      return;
    }
    onSubmit(values);
  };

  const onClose = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <Form name="report-input" className="report-form" onFinish={onFinish}>
      <p>Check all that apply</p>
      <Form.Item name="cases">
        <Checkbox.Group>
          <Row gutter={20} className="mt-4">
            {ReportCases.map((item) => (
              <Col sm={12} xs={24} key={item.name}>
                <Checkbox value={item.name}>
                  <div className="report-case-box">
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                  </div>
                </Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <p>It’s something else. Please describe the issue</p>
      <Form.Item name="description">
        <Input.TextArea
          rows={6}
          size="large"
          placeholder="Let  us know what’s going on"
        />
      </Form.Item>
      <div className="report-file">
        <Form.Item name="screenshot">
          <ImageUpload label="Attach a screenshot if you have" />
        </Form.Item>
      </div>
      <div className="mt-4 flex">
        <button type="submit" className="material-btn">
          Submit
        </button>
        <button className="material-btn-gray ml-4" onClick={onClose}>
          Cancel
        </button>
      </div>
    </Form>
  );
};
