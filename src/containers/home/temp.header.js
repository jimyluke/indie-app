import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Row,
  Col
} from "reactstrap";
import { Avatar } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import sampleAvatar from "../../assets/images/general/user-avatar.png";

class HomepageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="homepage-header">
        <Navbar expand="md" dark>
          <Row className="w-100 m-0">
            <Col xs={3} md={0}>
              <NavbarToggler onClick={this.toggle} />
              <Link className="brand d-none d-md-block d-lg-block d-xl-block text-left" to="/">
                <img
                  src={require("../../assets/images/general/INDIElogo.png")}
                  height="35"
                  alt="logo"
                  className="mt-2"
                />
              </Link>
            </Col>
            <Col className="align-items-center justify-content-center d-none d-md-flex d-lg-flex d-xl-flex">
              <Collapse isOpen={isOpen} navbar>
                <Nav className="d-flex justify-content-center w-100" navbar>
                  <NavItem>
                    <Link
                      className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                      to="/home"
                    >
                      menu one
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                      to="/home"
                    >
                      menu two
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                      to="/home"
                    >
                      discord
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Col>
            <Col className="d-flex align-items-center justify-content-center d-md-none">
              <Link className="brand" to="/">
                <img
                  src={require("../../assets/images/INDIElogo.png")}
                  height="35"
                  alt="logo"
                  className="mt-2"
                />
              </Link>
            </Col>
            <Col xs={3}>
              <div className="icons text-right">
                <Link className="nav-link" to="#">
                  <div
                    className="mr-2"
                    style={{
                      fontSize: 21,
                      color: "white",
                    }}
                  >
                    <SearchOutlined />
                  </div>
                </Link>
                <Link className="nav-link" to="#">
                  <div
                    className="mr-2"
                    style={{
                      fontSize: 21,
                      color: "white",
                    }}
                  >
                    {/*<Badge count={2}>*/}
                      <BellOutlined />
                    {/*</Badge>*/}
                  </div>
                </Link>
                <Link className="nav-link" to="#">
                  <Avatar
                    src={sampleAvatar}
                  />
                </Link>
              </div>
            </Col>
          </Row>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="d-flex justify-content-center w-100 d-md-none d-lg-none d-xl-none" navbar>
              <NavItem>
                <Link
                  className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                  to="/home"
                >
                  menu one
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                  to="/home"
                >
                  menu two
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link d-block text-uppercase mx-3 text-white font-weight-bold"
                  to="/home"
                >
                  discord
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    currentUser: state.user.profile,
    isAdmin: state.user.isAdmin,
    message: state.message,
    notification: state.notification,
    fieldData: state.profile.fieldData,
  };
}

export default connect(mapStateToProps, {})(HomepageHeader);
