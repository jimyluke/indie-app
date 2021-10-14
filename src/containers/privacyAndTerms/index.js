import React from "react";
import { Header, Footer } from "../../components/template";
import "./style.scss";
import Privacy from "./privacy";

import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { LeftOutlined } from "@ant-design/icons";
import Terms from "./terms";
function PrivacyAndTerm(props) {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Header />
      <div className="privacy-wrapper">
        <div className="privacy-container">
          <Container>
            <Row>
              <div className="auth-breadcrumb">
                <Link to="/">
                  <LeftOutlined /> Back to homepage
                </Link>
              </div>
            </Row>
            <Row>
              <Privacy />
              {/* <Terms /> */}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyAndTerm;
