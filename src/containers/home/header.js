import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { Avatar, Badge } from "antd";
import sampleUrl from "../../assets/images/user-avatar.png";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import sampleAvatar from "../../assets/images/user-avatar.png";

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
        <Navbar className="homepage-header__navbar" expand="md" dark>
          <Link className="homepage-header__navbar-brand" to="/">
            <img
              src={require("../../assets/images/INDIElogo.png")}
              height="35"
              alt="logo"
              className="mt-2"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
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
          <div className="homepage-header__navbar-icons">
            <Link className="nav-link" to="#">
              <div
                className="mr-2"
                style={{
                  fontSize: 21,
                  color: "white",
                }}
              >
                <Badge count={2}>
                  <BellOutlined />
                </Badge>
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
                <SearchOutlined />
              </div>
            </Link>
            <Link className="nav-link" to="#">
              <Avatar
                src={sampleAvatar}
              />
            </Link>
          </div>
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
