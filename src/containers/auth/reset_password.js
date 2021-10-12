import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/auth";
import { Header, Footer } from "../../components/template";
import { Form, Input, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResetPasswordForm = ({ resetPassword, token }) => {
  const onFinish = (values) => {
    resetPassword(token, values.password, values.conf_password);
  };

  return (
    <Form name="reset" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
          {
            min: 8,
            message: "Must be at least 8 characters",
          },
        ]}
      >
        <Input
          size="large"
          type="password"
          placeholder="Password"
          className="material-input"
        />
      </Form.Item>
      <Form.Item
        name="conf_password"
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          {
            min: 8,
            message: "Must be at least 8 characters",
          },
        ]}
      >
        <Input
          size="large"
          type="password"
          placeholder="Confirm Password"
          className="material-input"
        />
      </Form.Item>
      <button type="submit" className="material-btn mt-5">
        Reset Password
      </button>
    </Form>
  );
};

class ResetPassword extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.context.router.push("/");
    }
  }

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb login">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Reset password</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/">
        <LeftOutlined /> Back to homepage
      </Link>
    </div>
  );

  render() {
    const { resetPassword, match } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          {this.renderBreadCrumb()}
          <div className="register-forms">
            <div className="register-form">
              <h2 className="mt-5">Reset Password</h2>
              <ResetPasswordForm
                resetPassword={resetPassword}
                token={match.params.resetToken}
              />
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.resetMessage };
}

export default connect(mapStateToProps, {
  resetPassword,
})(ResetPassword);
