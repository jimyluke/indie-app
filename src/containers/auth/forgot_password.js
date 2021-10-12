import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { getForgotPasswordToken } from "../../actions/auth";
import history from "../../history";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components/template";

const ForgotForm = ({ sendMail }) => {
  const onFinish = (values) => {
    sendMail(values.email);
  };

  return (
    <Form name="forgot" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          type="email"
          size="large"
          placeholder="Email"
          className="material-input"
        />
      </Form.Item>
      <button type="submit" className="material-btn mt-5">
        Reset Password
      </button>
    </Form>
  );
};

class ForgotPassword extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      history.push("/user-dashboard");
      return;
    }
  }

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb login">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Forgot password</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/">
        <LeftOutlined /> Back to homepage
      </Link>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          {this.renderBreadCrumb()}
          <div className="register-forms">
            <div className="register-form">
              <h2 className="mt-5">Forgot Password</h2>
              <ForgotForm sendMail={this.props.getForgotPasswordToken} />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, {
  getForgotPasswordToken,
})(ForgotPassword);
