import React from "react";
import { Row, Col, Container } from "reactstrap";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import { Header, Footer } from "../../components/template";
import fb from "../../assets/images/contactpage/fb.png";
import twitter from "../../assets/images/contactpage/twitter.png";
import inIcon from "../../assets/images/contactpage/in.png";
import "./style.scss";

export default function ContactPage() {
  const { TextArea } = Input;

  return (
    <div className="contact">
      <Header />

      <div className="contact-wrapper">
        <Container fluid>
          <div className="contact-header">
            <Row>
              <Col md={12} lg={12}>
                <div className="contact-control-text">
                  <Link to="/" className="contact-control-link">
                    Home
                  </Link>
                  <span className="contact-control-span">
                    <RightOutlined
                      style={{
                        fontSize: "14px",
                        strokeWidth: "80",
                        stroke: "white",
                      }}
                    />
                  </span>
                  Contact Us
                </div>
              </Col>
            </Row>
          </div>
          <Row className="contact-content">
            <Col md={6} lg={6} className="contact-left">
              <div className="contact-title">CONTACT US</div>
              <div className="contact-lorem">Lorem ipsum dolor set</div>
              <div className="contact-desc">
                For help & support please sed voluptas ratione plof harum
                voluptatum asperiores volup tatum eli gendi ad omnis sim il ique
                lorem.
              </div>
              <div className="contact-email">hello@sparxsstudio.com</div>
              <div>
                <div className="contact-group-title">
                  Or you can find us here:
                </div>
                <div className="contact-group-icon">
                  <img src={fb} alt="fb" className="contact-group-item" />
                  <img
                    src={twitter}
                    alt="twitter"
                    className="contact-group-item"
                  />
                  <img src={inIcon} alt="in" className="contact-group-item" />
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} className="contact-right">
              <div>
                <div className="contact-right-title">Get in Touch</div>
                <div className="contact-right-desc">
                  Fill out the form below and we will be in touch.
                </div>
                <Form layout="vertical">
                  <Form.Item name="name">
                    <Input
                      size="large"
                      prefix={<UserOutlined />}
                      placeholder="Your Name"
                    />
                  </Form.Item>
                  <Form.Item name="email">
                    <Input
                      size="large"
                      prefix={<MailOutlined />}
                      placeholder="Email Address"
                    />
                  </Form.Item>
                  <TextArea placeholder="Type your message here ..." rows={8} />
                  <Button type="primary" className="contact-btn">
                    SEND
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
