import React, { useState } from "react";
import { Header, Footer } from "../../components/template";
import ProfileForm from "./profile-form";
import ProfileInfo from "./info_page";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const onToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <React.Fragment>
      <Header />
      {isEdit && <ProfileForm toggleEdit={onToggleEdit} />}
      {!isEdit && <ProfileInfo toggleEdit={onToggleEdit} />}
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
