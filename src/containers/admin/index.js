import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Header } from "../../components/template";
import history from "../../history";
import UserAll from "./user/all";
import Message from "./user/message";
import Reports from "./user/report";
import Verify from "./user/unverified";
import Faq from "./faq";
import FilmsAll from "./film/all";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class AdminDashboard extends Component {
  state = {
    collapsed: false,
    pageTitle: "",
    submenu: "",
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  componentDidMount() {
    if (!this.props.isAdmin) {
      history.push("/");
      return;
    }
  }

  switchPage = (submenu, pageTitle) => {
    this.setState({ submenu, pageTitle });
  };

  render() {
    const { pageTitle, submenu } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Layout className="admin-box">
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu theme="dark" defaultSelectedKeys={["sub1"]} mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item
                  key="pt-all"
                  onClick={() => this.switchPage("User", "Users")}
                >
                  Users
                </Menu.Item>
                {/* <Menu.Item
                  key="pt-msg"
                  onClick={() => this.switchPage("User", "Message")}
                >
                  Message
                </Menu.Item>
                <Menu.Item
                  key="pt-rpt"
                  onClick={() => this.switchPage("User", "Report")}
                >
                  Report
                </Menu.Item>
                <Menu.Item
                  key="pt-vrf"
                  onClick={() => this.switchPage("User", "Verify")}
                >
                  Unverified
                </Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <YoutubeOutlined />
                    <span>Films</span>
                  </span>
                }
              >
                <Menu.Item
                  key="film-all"
                  onClick={() => this.switchPage("Films", "List")}
                >
                  List
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb separator=">" style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>{submenu}</Breadcrumb.Item>
                <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item>
              </Breadcrumb>
              <div className="admin-main">{this.renderPage()}</div>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }

  renderPage = () => {
    const { pageTitle, submenu } = this.state;
    let pageName = `${submenu} ${pageTitle}`;
    switch (pageName) {
      case "User Users":
        return <UserAll />;
      case "Films List":
        return <FilmsAll />;
      case "Participant Message":
        return <Message />;
      case "Participant Report":
        return <Reports />;
      case "Participant Verify":
        return <Verify />;
      case "Setting Faq":
        return <Faq />;
      default:
        return null;
    }
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.profile,
    isAdmin: state.user.isAdmin,
  };
};

export default connect(mapStateToProps, {})(AdminDashboard);
