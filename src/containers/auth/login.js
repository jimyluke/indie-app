import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Checkbox, Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { loginUser, resendVerification } from "../../actions/auth";
import history from "../../history";
import { Header, Footer } from "../../components/template";

const LoginForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username or email!",
          },
        ]}
      >
        <Input
          size="large"
          className="material-input"
          spellCheck={false}
          placeholder="Username or Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
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
      <div className="mt-5 flex" style={{ justifyContent: "space-between" }}>
        <Form.Item name="remember" noStyle>
          <div className="login-remember">
            <Checkbox>Remember me</Checkbox>
          </div>
        </Form.Item>
        <Link to="/forgot-password/user">Forgot password</Link>
      </div>
      <button type="submit" className="material-btn mt-5">
        Log in
      </button>
    </Form>
  );
};

class Login extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      history.push("/home");
      return;
    }
  }

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb login">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/">
        <LeftOutlined /> Back to homepage
      </Link>
    </div>
  );

  render() {
    const { loginUser, resendVerification } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          {this.renderBreadCrumb()}
          <div className="register-forms">
            <div className="register-form">
              <h2 className="mt-5">Log In</h2>
              <LoginForm onSubmit={loginUser} resend={resendVerification} />
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

export default connect(mapStateToProps, { loginUser, resendVerification })(
  Login
);
