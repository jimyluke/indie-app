import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import "react-phone-input-2/lib/style.css";
import { Modal, Button, Popconfirm } from "antd";
import sampleUrl from "../../assets/images/general/user-avatar.png";
import ProfileForm from "../user/profile/profile-form";

class Personal extends Component {
  state = {
    showEditModal: false,
  };

  toggleModal = () => {
    this.setState({ showEditModal: !this.state.showEditModal });
  };

  render() {
    const { user } = this.props;
    const userInfo = user.profile || {};
    const { showEditModal } = this.state;

    return (
      <div className="support-personal">
        <Row className="support-center">
          <Col md={12} sm={12} className="support-title">
            PERSONAL INFORMATION
          </Col>
        </Row>
        <Row className="support-pt3">
          <Col md={12} sm={12} className="support-ava">
            <img src={userInfo.photo || sampleUrl} alt="avatar" />
          </Col>
          <Col md={12} sm={12} className="support-inf">
            <div className="infor-name">
              {userInfo.full_name}
              {userInfo.pronouns ? ` (${userInfo.pronouns})` : ""}
            </div>
            <div className="infor-address">{userInfo.location}</div>
          </Col>
        </Row>
        <div className="m-flex center">
          <Button
            type="primary"
            shape="round"
            className="support-btn support-btn-save support-btn-update support-btn-personal"
            size="large"
            onClick={this.toggleModal}
          >
            update personal details
          </Button>
          <Popconfirm
            title="Are you sure delete this profile?"
            onConfirm={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              shape="round"
              className="support-btn support-btn-cancel support-btn-personal"
              size="large"
            >
              delete account
            </Button>
          </Popconfirm>
        </div>
        {/* <Modal
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={false}
              className="modal-with-shadow"
              width={372}
            >
              <div className="tick-box">
                <div className="tick-box--sub">
                  <span className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </span>
                </div>
              </div>
              <p className="text-notifi--main">Account deleted successfully!</p>
              <p className="text-notifi--sub">
                Your account will be logged out automatically
              </p>
            </Modal> */}
        {showEditModal && (
          <Modal
            visible={showEditModal}
            centered
            width={1000}
            footer={false}
            closable={false}
            className="modal-with-shadow"
          >
            <div className="support-profile">
              <ProfileForm toggleEdit={this.toggleModal} />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.profile,
  };
}

export default connect(mapStateToProps, {})(Personal);
