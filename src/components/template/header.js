import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Avatar, Input, message } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  CloseOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import sampleUrl from "../../assets/images/general/user-avatar.png";
import MenuImg from "../../assets/images/general/Menu.png";
import Logo from "../../assets/images/general/INDIElogo.png";
import history from "../../history";
import { searchJWVideos } from "../../actions/jwplayer";

class HeaderTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchOpen: false,
      searchLoading: false,
      search: "",
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.search !== this.props.search && this.props.search) {
      this.setState({ searchOpen: true, search: this.props.search });
    }
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleSearch = () => {
    this.setState({ searchOpen: !this.state.searchOpen });
  };

  onChangeSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  searchVideo = async (e) => {
    const { search } = this.state;
    if (!search) return;
    if (search.length < 3) {
      message.error("Search text should be more than 3 in length");
      return;
    }
    e.target.blur();
    this.setState({ searchLoading: true });
    await this.props.searchJWVideos(search);
    this.setState({ searchLoading: false });
    history.push(`/search?query=${search}`);
  };

  renderNavs = () => {
    return (
      <div className="nav-items">
        <Link to="/home">Home</Link>
        <Link to="/library">Library</Link>
        <a
          href="https://discord.gg/uG8UZbxMAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </div>
    );
  };

  renderSearchBox = () => (
    <div className="search-box">
      <Input
        className="search-inputbox"
        addonBefore={
          this.state.searchLoading ? (
            <Loading3QuartersOutlined spin />
          ) : (
            <SearchOutlined />
          )
        }
        bordered={false}
        onPressEnter={this.searchVideo}
        onChange={this.onChangeSearch}
        value={this.state.search}
        autoFocus
      />
      <div className="search-close" onClick={this.toggleSearch}>
        <CloseOutlined />
      </div>
    </div>
  );

  render = () => {
    const { authenticated, currentUser, isAdmin } = this.props;
    const { isOpen, searchOpen } = this.state;

    if (!authenticated) {
      return (
        <div className="main-nav">
          <img src={Logo} alt="logo" className="center-logo" />
        </div>
      );
    }

    return (
      <div className="main-nav">
        <img
          className="nav-toggler"
          src={MenuImg}
          onClick={this.toggle}
          alt=""
        />
        <Link className="navbar-logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        {this.renderNavs()}
        {searchOpen && this.renderSearchBox()}
        <div className="side-nav-items">
          {!searchOpen && (
            <Link className="nav-link" to="#" onClick={this.toggleSearch}>
              <SearchOutlined />
            </Link>
          )}
          <Link className="nav-link" to="#">
            <BellOutlined />
          </Link>
          <UncontrolledDropdown>
            <DropdownToggle nav>
              {currentUser.profile && (
                <Avatar src={currentUser.profile.photo || sampleUrl} />
              )}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link className="nav-link" to={"/profile"}>
                  My Profile
                </Link>
              </DropdownItem>
              {isAdmin && (
                <DropdownItem>
                  <Link className="nav-link" to={"/admin"}>
                    Admin
                  </Link>
                </DropdownItem>
              )}
              <DropdownItem>
                <Link className="nav-link" to={"/support"}>
                  Setting
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div className={`header-collapse ${isOpen ? "active" : ""}`}>
          {this.renderNavs()}
        </div>
      </div>
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

export default connect(mapStateToProps, { searchJWVideos })(HeaderTemplate);
