import React, { Component } from "react";
import { connect } from "react-redux";
import { Breadcrumb, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { registerUser } from "../../../actions/auth";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../../components/template";
import {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Form7,
  Form8,
  Form9,
} from "./forms";
import moment from "moment";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      card: "creator",
      full_name: "",
      dob: "",
      email: "",
      username: "",
      password: "",
      films: "",
    };
  }

  renderAuthBanner = () => {
    const { step } = this.state;
    const percent = Math.round((step * 100) / 9);
    return (
      <div className="auth-banner">
        <div style={{ width: `${percent}%` }} />
      </div>
    );
  };

  renderBreadCrumb = () => (
    <div className="auth-breadcrumb">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Create an account</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/">
        <LeftOutlined /> Back to homepage
      </Link>
    </div>
  );

  onGoBack = () => {
    const { step, card } = this.state;
    let target = step - 1
    if (step === 9 && card !== "creator") target = 7
    this.setState({ step: target });
  };

  onSkip = () => {
    const { step, card } = this.state;
    let target = step + 1
    if (step === 7 && card !== "creator") target = 9
    this.setState({ step: target });
  };

  onSelectCard = (card) => {
    this.setState({ card, step: 2 });
  };

  onSetFullName = (full_name) => {
    this.setState({ full_name, step: 3 });
  };

  onSetDOB = (dob) => {
    this.setState({ dob, step: 4 });
  };

  onSetEmail = (email) => {
    this.setState({ email, step: 5 });
  };

  onSetUsername = (username) => {
    this.setState({ username, step: 6 });
  };

  onSetPassword = (password) => {
    this.setState({ password, step: 7 });
  };

  onSetFilms = (films) => {
    const { card } = this.state;
    this.setState({ films, step: card === "creator" ? 8 : 9});
  };

  onFileUpload = () => {
    this.setState({ step: 9 });
  };

  onGetStarted = () => {
    const values = JSON.parse(JSON.stringify(this.state));
    values.dob = moment(values.dob).format("YYYY-MM-DD");
    delete values.step;
    this.props.registerUser(values);
  };

  renderRegisterForm = () => {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <Form1 onSubmit={this.onSelectCard} />;
      case 2:
        return <Form2 onSubmit={this.onSetFullName} state={this.state} />;
      case 3:
        return <Form3 onSubmit={this.onSetDOB} state={this.state} />;
      case 4:
        return <Form4 onSubmit={this.onSetEmail} state={this.state} />;
      case 5:
        return <Form5 onSubmit={this.onSetUsername} state={this.state} />;
      case 6:
        return <Form6 onSubmit={this.onSetPassword} state={this.state} />;
      case 7:
        return (
          <Form7
            onSubmit={this.onSetFilms}
            onSkip={this.onSkip}
            state={this.state}
          />
        );
      case 8:
        return <Form8 onSubmit={this.onFileUpload} onSkip={this.onSkip} />;
      case 9:
        return <Form9 onSubmit={this.onGetStarted} />;
      default:
        return <Form1 onSubmit={this.onSelectCard} />;
    }
  };

  render() {
    const { step } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="main-content">
          {this.renderAuthBanner()}
          {this.renderBreadCrumb()}
          <div className="register-forms">{this.renderRegisterForm()}</div>
          {step > 1 && step < 10 && (
            <Button
              type="primary"
              className="auth-goback-btn"
              onClick={this.onGoBack}
            >
              Prev
            </Button>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    fields: state.profile,
  };
}

export default connect(mapStateToProps, {
  registerUser,
})(Register);
