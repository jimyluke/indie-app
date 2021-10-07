import React, { useState } from "react";
import { Row, Col, Container, NavLink } from "reactstrap";
import {
  RightOutlined,
  GlobalOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Collapse } from "reactstrap";

const CollapseWrapper = ({
  title = "genres",
  items = [
    { label: "Mystery", url: "/" },
    { label: "Sci-Fi", url: "/" },
    { label: "Horror", url: "/" },
    { label: "Romance", url: "/" },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-wrapper">
      <div className="collapse-wrapper__header" onClick={toggle}>
        {title}
        <RightOutlined className="ml-2" />
      </div>
      <Collapse isOpen={isOpen}>
        {items.map((item, index) => (
          <NavLink
            key={index}
            className="nav-link p-0 my-1 text-white"
            to={item.url}
          >
            {item.label}
          </NavLink>
        ))}
      </Collapse>
    </div>
  );
};

const footerItems = [
  {
    title: "genres",
    items: [
      { label: "Mystery", url: "/" },
      { label: "Sci-Fi", url: "/" },
      { label: "Horror", url: "/" },
      { label: "Romance", url: "/" },
    ],
  },
  {
    title: "company",
    items: [
      { label: "About Us", url: "/" },
      { label: "Contact", url: "/" },
      { label: "Partners", url: "/" },
      { label: "Blog", url: "/" },
      { label: "Meet the Team", url: "/" },
      { label: "Careers", url: "/" },
    ],
  },
  {
    title: "for you",
    items: [
      { label: "Privacy Policy", url: "/" },
      { label: "Terms of Use", url: "/" },
      { label: "Subscriber", url: "/" },
    ],
  },
  {
    title: "help",
    items: [
      { label: "FAQ", url: "/" },
      { label: "Email Support", url: "/" },
      { label: "Sitemap", url: "/" },
    ],
  },
];

const languages = ["Spanish", "Chinese", "Japanese"];

const Footer = () => {
  const [languageCollapseOpen, setLanguageCollapseOpen] = useState(false);
  // const [selectedLanguage, selectLanguage] = useState("English");
  const toggle = () => setLanguageCollapseOpen(!languageCollapseOpen);

  return (
    <div className="homepage-footer">
      <Container>
        <div className="d-md-none">
          <Row className="text-white pt-3">
            <img
              src={require("../../assets/images/INDIElogo.png")}
              height="35"
              alt="logo"
              className="mt-2"
            />
          </Row>
          <Row className="text-white mt-3">
            {footerItems.slice(0, 2).map((item, index) => (
              <Col className="p-0" key={index}>
                <CollapseWrapper {...item} />
              </Col>
            ))}
          </Row>
          <Row className="text-white mt-3">
            {footerItems.slice(2, 4).map((item, index) => (
              <Col className="p-0" key={index}>
                <CollapseWrapper {...item} />
              </Col>
            ))}
          </Row>
          <Row className="mt-3 text-white links-item">
            An experiential and interactive multi-platform streaming app and
            distribution channel dedicated to independently produced film and
            TV.
          </Row>
          <Row className="mt-3">
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
          </Row>
          <Row className="mt-3 pb-5 text-white">
            <Col className="p-0 font-normal" xs={8}>
              <div className="links-item">Designed with by Oak Theory</div>
              <div className="links-item">
                2021 © Indie Sparxs, All rights reserved.
              </div>
            </Col>
            <Col className="p-0" xs={4}>
              <Col className="p-0 text-right">
                <div className="collapse-wrapper">
                  <div className="collapse-wrapper__header" onClick={toggle}>
                    <GlobalOutlined className="mr-2" />
                    English
                    <RightOutlined className="ml-2" />
                  </div>
                  <Collapse isOpen={languageCollapseOpen}>
                    {languages.map((language, index) => (
                      <NavLink
                        key={index}
                        className="nav-link p-0 my-1 text-white"
                      >
                        {language}
                      </NavLink>
                    ))}
                  </Collapse>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
        <div className="d-none d-md-block d-lg-block d-xl-block pt-5">
          <Row>
            <Col lg={3}>
              <img
                src={require("../../assets/images/INDIElogo.png")}
                height="35"
                alt="logo"
              />
              <div className="links-item my-4">
                An experiential and interactive multi-platform streaming app and
                distribution channel dedicated to independently produced film
                and TV.
              </div>
              <div>
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
            </Col>
            {footerItems.map(({ title, items }, itemIndex) => (
              <Col className="links" key={itemIndex}>
                <div className="links-title mb-3">{title}</div>
                {items.map(({ label }, index) => (
                  <div className="links-item my-2" key={index}>
                    {label}
                  </div>
                ))}
              </Col>
            ))}
          </Row>
          <Row className="align-items-center">
            <Col className="links-item">
              2021 © Indie Sparxs, All rights reserved.
            </Col>
            <Col className="text-right text-white d-flex justify-content-end flex-column">
              <div className="p-0 text-right">
                <div className="collapse-wrapper">
                  <div className="collapse-wrapper__header" onClick={toggle}>
                    <GlobalOutlined className="mr-2" />
                    English
                    <RightOutlined className="ml-2" />
                  </div>
                  <Collapse isOpen={languageCollapseOpen}>
                    {languages.map((language, index) => (
                      <NavLink
                        key={index}
                        className="nav-link p-0 my-1 text-white"
                      >
                        {language}
                      </NavLink>
                    ))}
                  </Collapse>
                </div>
              </div>
              <div className="links-item mt-3 mb-5">
                Designed with by Oak Theory
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
