import React from "react";
import { Header, Footer } from "../../components/template";
import { Row, Col, Container } from "reactstrap";
import { BellOutlined } from "@ant-design/icons";
import "react-phone-input-2/lib/style.css";
import "./style.scss";

import mail from "../../assets/images/supportpage/mail_open.png";
import security from "../../assets/images/supportpage/security.png";
import user from "../../assets/images/supportpage/user.png";
import movie1 from "../../assets/images/supportpage/movie1.png";
import movie2 from "../../assets/images/supportpage/movie2.png";
import movie3 from "../../assets/images/supportpage/movie3.png";
import movie4 from "../../assets/images/supportpage/movie4.png";
import Personal from "./personal";
import Password from "./password";
import Notifications from "./notifications";
import Invite from "./invite";

function SupportPage() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Header />
      <div className="support-wrapper">
        <div className="support-container">
          <Container fluid>
            <Row>
              <Col
                md={3}
                sm={12}
                className="support-first support-pd5"
                style={{ color: "white" }}
              >
                <p className="support-setting">SETTINGS</p>
                <div className="support-menu">
                  <p className="support-item">
                    <img
                      src={user}
                      className="support-item-img"
                      alt="personal information"
                    />
                    <p className="support-item-txt">Personal Information</p>
                  </p>
                  <p className="support-item">
                    <img
                      src={security}
                      className="support-item-img"
                      alt="password"
                    />
                    <p className="support-item-txt">Password & Security</p>
                  </p>
                  <p className="support-item">
                    <BellOutlined
                      className="support-item-img"
                      alt="notifications"
                    />
                    <p className="support-item-txt">Notifications</p>
                  </p>
                  <p className="support-item">
                    <img src={mail} className="support-item-img" alt="invite" />
                    <p className="support-item-txt">Invite Friends</p>
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12} className="support-second support-pd5">
                <Container>
                  <Personal />
                  {/* <Password/> */}
                  {/* <Notifications/> */}
                  {/* <Invite/> */}
                </Container>
              </Col>
              <Col md={3} sm={12} className="d-none d-lg-block">
                <img src={movie1} alt="movie1" className="support-img" />
                <img src={movie2} alt="movie2" className="support-img" />
                <img src={movie3} alt="movie3" className="support-img" />
                <img src={movie4} alt="movie4" className="support-img" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SupportPage;
