import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { setSignUpData } from "../../actions/auth";
import { Link } from "react-router-dom";

const SignupForm = ({ onSubmit }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form name="signup" className="signup-form" onFinish={onFinish}>
      <Form.Item
        name="full_name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input size="large" spellCheck={false} placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input size="large" placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            min: 8,
            message: "Must be at least 8 characters",
          },
        ]}
      >
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>
      <div className="submit_button">
        <button type="submit" className="btn sign_up_button">
          SIGN UP
        </button>
      </div>
    </Form>
  );
};

class SignUp extends Component {
  render() {
    const { setSignUpData } = this.props;
    return (
      <div className="sign_up_methods">
        <SignupForm onSubmit={setSignUpData} />
        <div className="or">
          <h6>or</h6>
        </div>
        <div className="alter_login">
          <ul>
            <li className="facebook">
              <Link to="#">
                <i className="fab fa-facebook"></i> Log in with Facebook
              </Link>
            </li>
            <li className="google">
              <Link to="#">
                <img
                  src={require("../../assets/images/landing/google_icon.png")}
                  className="img-fluid"
                  alt=""
                />{" "}
                Log in with Google
              </Link>
            </li>
            <li className="twitter">
              <Link to="#">
                <i className="fab fa-twitter"></i> Log in with TWITTER
              </Link>
            </li>
          </ul>
        </div>
        <div className="alert_texts">
          <p>
            By signing up you accept the{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { setSignUpData })(SignUp);
