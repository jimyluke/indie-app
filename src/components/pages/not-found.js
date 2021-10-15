import React from "react";
import Header from "../template/header";
import Footer from "../template/footer";
import { Link } from "react-router-dom";
import {
  RightOutlined,
  GlobalOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
function NotFound(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="not-found">
        <div className="not-found--title">404</div>
        <p className="not-found--text">
          The page you are looking for is not available or doesn’t belong to
          this website!
        </p>
        <Link className="button-link" to="/">
          Back to Homepage
        </Link>
        <div className="contact-us">
          <div className="title-contact">Follow us here: </div>
          <div className="icon-contact">
            <Button
              className="mr-3"
              shape="circle"
              icon={<FacebookOutlined />}
            />
            <Button
              className="mr-3"
              shape="circle"
              icon={<TwitterOutlined />}
            />
            <Button shape="circle" icon={<LinkedinOutlined />} />
          </div>
        </div>
        <div className="bg-linear"></div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default NotFound;
