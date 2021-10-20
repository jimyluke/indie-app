import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Select, Breadcrumb } from "antd";
import { Col, Row, Container } from "reactstrap";
import { BigUpload } from "../../../components/template";
import { pronouns } from "../../../constants";
import { processLink } from "../../../utils/helper";
import { genres } from "../../../constants";
import { updateProfile } from "../../../actions/auth";
import TwitterIcon from "../../../assets/images/general/twitter_icon.svg";
import YoutubeIcon from "../../../assets/images/general/youtube_icon.svg";
import InstagramIcon from "../../../assets/images/general/instram_icon.svg";

const EditForm = ({ onSubmit, profile, onClose, isCreator }) => {
  const [_fullname, setFullname] = useState(profile.full_name);
  const [_location, setLocation] = useState(profile.location);
  const [_pronouns, setPronouns] = useState(profile.pronouns);
  const [_credit, setCredit] = useState(profile.credit);

  const onFinish = (values) => {
    values.youtube = processLink(values.youtube);
    values.instagram = processLink(values.instagram);
    values.twitter = processLink(values.twitter);
    values.recent_films = profile.recent_films;
    onSubmit(values);
  };

  const onCloseForm = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Form
      name="update_profile"
      onFinish={onFinish}
      initialValues={{ ...profile }}
    >
      <div className="user-card">
        <Form.Item name="photo">
          <BigUpload />
        </Form.Item>
        <div className="user-card-desc">
          <h4>
            {_fullname}
            {_pronouns ? ` (${_pronouns})` : ""}
          </h4>
          {isCreator && (
            <b style={{ color: "#aaa" }}>
              {_credit}
              <br />
            </b>
          )}
          <b>{_location}</b>
        </div>
      </div>
      <Row className="mt-4">
        <Col md={6} sm={12}>
          <div className="user-info-value">
            <b>Username</b>
            <Form.Item
              name="full_name"
              rules={[
                {
                  required: true,
                  message: "Please input the full name!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Full name"
                className="material-input"
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="user-info-value">
            <b>Pronouns</b>
            <Form.Item name="pronouns">
              <Select
                size="large"
                className="material-input"
                onChange={(value) => setPronouns(value)}
              >
                {pronouns.map((item) => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          {isCreator && (
            <div className="user-info-value">
              <b>On-Screen Credit</b>
              <Form.Item name="credit">
                <Input
                  size="large"
                  placeholder="Credit"
                  className="material-input"
                  onChange={(e) => setCredit(e.target.value)}
                />
              </Form.Item>
            </div>
          )}

          <div className="user-info-value">
            <b>Language</b>
            <Form.Item name="language">
              <Input
                size="large"
                placeholder="Language"
                className="material-input"
              />
            </Form.Item>
          </div>
          <div className="user-info-value">
            <b>Location</b>
            <Form.Item name="location">
              <Input
                size="large"
                placeholder="Location"
                className="material-input"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Item>
          </div>
        </Col>
        <Col md={6} sm={12}>
          {!isCreator && (
            <div className="user-info-value">
              <b>About me</b>
              <Form.Item name="bio">
                <Input.TextArea
                  rows={1}
                  size="large"
                  className="material-input"
                />
              </Form.Item>
            </div>
          )}
          <div className="user-info-value">
            <b>Favorite films</b>
            <Form.Item name="films">
              <Input
                size="large"
                placeholder="Films"
                className="material-input"
              />
            </Form.Item>
          </div>
          {isCreator && (
            <React.Fragment>
              <div className="user-info-value">
                <b>Favorite genre</b>
                <Form.Item name="genre">
                  <Select size="large" className="material-input">
                    {genres.map((item) => (
                      <Select.Option key={item.name} value={item.name}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="user-info-value">
                <b>Social media</b>
                <div>
                  <div className="flex">
                    <img src={TwitterIcon} alt="" />
                    <Form.Item name="twitter">
                      <Input
                        size="large"
                        placeholder="Https://"
                        className="material-input"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex">
                    <img src={YoutubeIcon} alt="" />
                    <Form.Item name="youtube">
                      <Input
                        size="large"
                        placeholder="Https://"
                        className="material-input"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex">
                    <img src={InstagramIcon} alt="" />
                    <Form.Item name="instagram">
                      <Input
                        size="large"
                        placeholder="Https://"
                        className="material-input"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </Col>
      </Row>

      <div className="m-flex mt-4">
        <button className="material-btn" type="submit">
          Save
        </button>
        <button className="material-btn-empty" onClick={onCloseForm}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

class ProfileForm extends Component {
  renderBreadCrumb = () => (
    <div className="auth-breadcrumb">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Edit My Profile</Breadcrumb.Item>
        <Breadcrumb.Item>Edit</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );

  onSubmitUpdate = async (profile) => {
    const { updateProfile, toggleEdit } = this.props;
    await updateProfile(profile);
    toggleEdit();
  };

  render = () => {
    const { user, toggleEdit } = this.props;
    const isCreator = user.role === "Creator";
    return (
      <React.Fragment>
        {this.renderBreadCrumb()}
        <Container className="user-info">
          <EditForm
            profile={user.profile}
            onSubmit={this.onSubmitUpdate}
            onClose={toggleEdit}
            isCreator={isCreator}
          />
        </Container>
      </React.Fragment>
    );
  };
}

function mapStateToProps(state) {
  return {
    user: state.user.profile,
  };
}

export default connect(mapStateToProps, { updateProfile })(ProfileForm);
