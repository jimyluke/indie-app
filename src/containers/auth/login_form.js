import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/general/facebook_blue_icon.svg";
import GoogleIcon from "../../assets/images/general/google_icon.svg";
import TwitterIcon from "../../assets/images/general/twitter_white_icon.svg";

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
      <h3>Welcome back! Let’s log in</h3>
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
        <Input size="large" type="password" placeholder="Password" />
      </Form.Item>
      <div className="mt-1 flex" style={{ justifyContent: "space-between" }}>
        <Form.Item name="remember" noStyle>
          <div className="login-remember">
            <Checkbox>Remember password</Checkbox>
          </div>
        </Form.Item>
        <Link to="/forgot-password/user" className="forgot">
          Forgot password?
        </Link>
      </div>
      <button type="submit" className="material-btn-rectangle mt-4">
        Login
      </button>
      <div className="mt-3 center" style={{ color: "#aaa" }}>
        Don't have an account?{" "}
        <Link to="/register" className="forgot">
          Sign up
        </Link>
      </div>
      <div className="login-divider">
        <hr />
        <p>or</p>
      </div>
      <div className="login-social-btns">
        <Button type="primary" size="large">
          <img src={FacebookIcon} alt="" className="mr-2" /> Log in with
          facebook
        </Button>
        <Button type="ghost" size="large">
          <img src={GoogleIcon} alt="" />
        </Button>
        <Button type="primary" size="large">
          <img src={TwitterIcon} alt="" />
        </Button>
      </div>
      <p className="login-bottom">
        By signing up you accept the <Link to="/terms">Terms of Service</Link>{" "}
        and <Link to="/privacy">Privacy Policy</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
