import React from "react";
import { Form, Input, DatePicker, message, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import CreatorCard from "../../../assets/images/auth/creator-card.svg";
import CinerCard from "../../../assets/images/auth/ciner-card.svg";
import RegisterSuccess from "../../../assets/images/auth/register-success.svg";

const { Dragger } = Upload;

export const Form1 = ({ onSubmit }) => (
  <div className="register-form">
    <h2>Lets get started now!</h2>
    <span>
      Choose the type of account.
      <br />
      Remember that you could choose two options!
    </span>
    <div className="select-cards-box">
      <img
        src={CreatorCard}
        onClick={() => onSubmit("creator")}
        alt="CreatorCard"
      />
      <img src={CinerCard} onClick={() => onSubmit("ciner")} alt="CinerCard" />
    </div>
    <p className="steps">Step 1</p>
  </div>
);

export const Form2 = ({ onSubmit, state }) => {
  const onFinish = (values) => {
    onSubmit(values.full_name);
  };
  return (
    <div className="register-form">
      <h2>Great, can we get your full name?</h2>
      <span>Enter your name and last name</span>
      <Form
        name="full-name"
        className="mt-5"
        initialValues={{ full_name: state.full_name }}
        onFinish={onFinish}
      >
        <Form.Item
          name="full_name"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Full name"
            className="material-input"
            spellCheck={false}
          />
        </Form.Item>
        <button type="submit" className="material-btn mt-5">
          Next
        </button>
      </Form>
      <p className="steps">Step 2</p>
    </div>
  );
};

export const Form3 = ({ onSubmit, state }) => {
  const onFinish = (values) => {
    onSubmit(values.dob);
  };
  return (
    <div className="register-form">
      <h2>What's your birth date?</h2>
      <span>Type here</span>
      <Form
        name="dob-input"
        className="mt-5"
        initialValues={{ dob: state.dob }}
        onFinish={onFinish}
      >
        <Form.Item
          name="dob"
          rules={[
            {
              required: true,
              message: "Please input your birthday!",
            },
          ]}
        >
          <DatePicker
            format={"DD/MM/YY"}
            size="large"
            className="material-datepicker"
          />
        </Form.Item>
        <button type="submit" className="material-btn mt-5">
          Next
        </button>
      </Form>
      <p className="steps">Step 3</p>
    </div>
  );
};

export const Form4 = ({ onSubmit, state }) => {
  const onFinish = (values) => {
    onSubmit(values.email);
  };
  return (
    <div className="register-form">
      <h2>What's your email address?</h2>
      <span>We'll only use it to send you a confirmation.</span>
      <Form
        name="email-input"
        className="mt-5"
        initialValues={{ email: state.email }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="frank@gmail.com"
            className="material-input"
            type="email"
            spellCheck={false}
          />
        </Form.Item>
        <button type="submit" className="material-btn mt-5">
          Next
        </button>
      </Form>
      <p className="steps">Step 4</p>
    </div>
  );
};

export const Form5 = ({ onSubmit, state }) => {
  const onFinish = (values) => {
    onSubmit(values.username);
  };
  return (
    <div className="register-form">
      <h2>Please enter your username</h2>
      <span>Lorem Ipsum</span>
      <Form
        name="username-input"
        className="mt-5"
        initialValues={{ username: state.username }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="username"
            className="material-input"
            spellCheck={false}
          />
        </Form.Item>
        <button type="submit" className="material-btn mt-5">
          Next
        </button>
      </Form>
      <p className="steps">Step 5</p>
    </div>
  );
};

export const Form6 = ({ onSubmit, state }) => {
  const onFinish = (values) => {
    if (values.password !== values.conf_password) {
      message.error("password confirmation doesn't match!");
      return;
    }
    onSubmit(values.password);
  };
  return (
    <div className="register-form">
      <h2>Create password</h2>
      <Form
        name="password-input"
        className="mt-5"
        initialValues={{ password: state.password }}
        onFinish={onFinish}
      >
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
          <Input
            size="large"
            placeholder="Enter password"
            className="material-input"
            spellCheck={false}
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="conf_password"
          rules={[
            {
              required: true,
              message: "Please input your password confirmation!",
            },
            {
              min: 8,
              message: "Must be at least 8 characters",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Confirm password"
            className="material-input"
            type="password"
            spellCheck={false}
          />
        </Form.Item>
        <button type="submit" className="material-btn mt-5">
          Next
        </button>
      </Form>
      <p className="steps">Step 6</p>
    </div>
  );
};

export const Form7 = ({ onSubmit, onSkip, state }) => {
  const onFinish = (values) => {
    if (values.films.split(",").length !== 4) {
      message.error("Please input correct 4 films separating with comma!");
      return;
    }
    onSubmit(values.films);
  };

  const skipForm = (e) => {
    e.preventDefault();
    onSkip();
  };
  return (
    <div className="register-form">
      <h2>What four films define you?</h2>
      <span>Type here titles of movies</span>
      <Form
        name="films-input"
        className="mt-5"
        initialValues={{ films: state.films }}
        onFinish={onFinish}
      >
        <Form.Item
          name="films"
          rules={[
            {
              required: true,
              message: "Please input your films!",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Puop fiction, Notebook..."
            className="material-input"
          />
        </Form.Item>
        <div className="mt-5 flex" style={{ justifyContent: "center" }}>
          <button className="material-btn-outline mr-4" onClick={skipForm}>
            Skip
          </button>
          <button type="submit" className="material-btn">
            Next
          </button>
        </div>
      </Form>
      <p className="steps">Step 7</p>
    </div>
  );
};

export const Form8 = ({ onSubmit, onSkip }) => {
  const onFinish = () => {
    onSubmit();
  };

  const skipForm = (e) => {
    e.preventDefault();
    onSkip();
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="register-form">
      <h2>Please upload your film here.</h2>
      <span>Choose file or drag here</span>
      <div className="film-dropzone">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <CloudUploadOutlined />
          </p>
          <p className="ant-upload-text">Size limit: 100MB</p>
        </Dragger>
      </div>
      <div className="mt-5 flex" style={{ justifyContent: "center" }}>
        <button className="material-btn-outline mr-4" onClick={skipForm}>
          Skip
        </button>
        <button className="material-btn" onClick={onFinish}>
          Next
        </button>
      </div>
      <p className="steps">Step 8</p>
    </div>
  );
};

export const Form9 = ({ onSubmit }) => (
  <div className="register-success-box">
    <h2>Awesome!</h2>
    <span>Registration successful</span>
    <img src={RegisterSuccess} alt="RegisterSuccess" />
    <button className="material-btn" onClick={onSubmit}>
      Let’s start
    </button>
  </div>
);
