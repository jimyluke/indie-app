import React, { useState } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";

import VideoIcon from "../../assets/images/general/video_icon.png";

const VideoUpload = ({ onChange, label }) => {
  const [imageURL, setImageURL] = useState("");

  const handleChange = (file) => {
    setImageURL(VideoIcon);
    onChange(file);
  };

  const uploadButton = (
    <div>
      <CloudUploadOutlined />
      <div style={{ marginTop: 10 }}>{label}</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      data={handleChange}
    >
      {imageURL ? (
        <img src={imageURL} alt="avatar" style={{ width: "85%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default VideoUpload;
