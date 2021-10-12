import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Avatar, Badge } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import sampleUrl from "../../assets/images/general/user-avatar.png";

class HeaderTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render = () => {
    const { authenticated, currentUser, notification, isAdmin } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <div className={`main-nav ${isAdmin && "admin-nav"}`}>
          <Navbar className="container-nav" expand="md" dark>
            <Link
              className={`navbar-brand ${authenticated ? "" : "center-logo"}`}
              to="/"
            >
              <img
                src={require("../../assets/images/general/INDIElogo.png")}
                alt="logo"
              />
            </Link>
            {authenticated && <NavbarToggler onClick={this.toggle} />}
            {authenticated && (
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto ml-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="#">
                      Film
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="#">
                      Discord
                    </Link>
                  </NavItem>
                  {isAdmin && (
                    <NavItem>
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </NavItem>
                  )}
                </Nav>
                <Nav navbar>
                  <NavItem>
                    <Link className="nav-link" to="#">
                      <div
                        style={{
                          fontSize: 21,
                          color: "white",
                        }}
                      >
                        <SearchOutlined style={{ marginTop: "5px" }} />
                      </div>
                    </Link>
                  </NavItem>
                  <NavItem>
                    {/* <Link className="nav-link" to="/notification"> */}
                    <Link className="nav-link" to="#">
                      <div
                        style={{
                          fontSize: 21,
                          color: "white",
                        }}
                      >
                        <Badge count={notification.unread}>
                          <BellOutlined />
                        </Badge>
                      </div>
                    </Link>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      {currentUser.profile && (
                        <React.Fragment>
                          <Avatar
                            src={currentUser.profile.photo || sampleUrl}
                          />
                        </React.Fragment>
                      )}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link className="nav-link" to={"/profile"}>
                          My Profile
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link className="nav-link" to="/logout">
                          Logout
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            )}
          </Navbar>
        </div>
      </React.Fragment>
    );
  };
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

export default connect(mapStateToProps, {})(HeaderTemplate);
