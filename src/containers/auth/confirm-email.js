import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/general/user-avatar.png";
import { Header, Footer } from "../../components/template";
import { confirmEmail } from "../../actions/auth";
import { Breadcrumb } from "antd";
import { LeftOutlined } from "@ant-design/icons";

class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      message: "",
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    let message = await this.props.confirmEmail({
      token: this.props.match.params.token,
      mode: this.props.match.params.mode,
    });
    this.setState({ message, loading: false });
  };

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
    const { loading, message } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          {this.renderBreadCrumb()}
          <div className="register-forms">
            <div className="register-form">
              <img className="confirm-img" src={Logo} alt="logo" />
              <h2 className="mt-3 mb-5">Email Confirmation</h2>
              {loading && <h5>Verifing your accout ...</h5>}
              {!loading && <h5>{message}</h5>}
              {!loading && (
                <Link className="material-btn mt-5" to={"/"}>
                  LogIn
                </Link>
              )}
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
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { confirmEmail })(ConfirmEmail);
