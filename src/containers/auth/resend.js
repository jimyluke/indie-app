import React from "react";
import { connect } from "react-redux";
import Logo from "../../assets/images/general/user-avatar.png";
import { Header, Footer } from "../../components/template";
import { resendVerification } from "../../actions/auth";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";

class Resend extends React.Component {
  renderBreadCrumb = () => (
    <div className="auth-breadcrumb login">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Email confirmation</Breadcrumb.Item>
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
              <img className="confirm-img" src={Logo} alt="logo" />
              <h2 className="mt-3 mb-4">Email Confirmation</h2>
              <p style={{ maxWidth: "600px" }}>
                We have sent an email to the address you provided. Please check
                your junk/spam folder in case it is caught in there. After
                receiving the email, follow the link to complete your
                registration.
              </p>
              <br />
              <p>
                If you haven't received that email within a few minutes, please
                click{" "}
                <Link
                  className="verify-link"
                  to="#"
                  onClick={this.props.resendVerification}
                >
                  here
                </Link>{" "}
                to resend it
              </p>
            </div>
          </div>
        </div>
        <div className="login-page"></div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default connect(mapStateToProps, { resendVerification })(Resend);
