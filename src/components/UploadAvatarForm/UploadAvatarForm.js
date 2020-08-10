import React from "react";
import "./UploadAvatarForm.css";

const UploadAvatarForm = () => {
  return (
    <div className="upload-avatar">
      <div className="upload-avatar__container">
        <div className="upload-avatar__avatar"></div>
      </div>
      <div className="upload-avatar__button">
        <div className="upload-avatar__input">
          <input type="file" id="avatar"></input>
        </div>
        <div className="upload-avatar__label">
          <label for="avatar">Choose Photo</label>
        </div>
      </div>
    </div>
  );
};

export default UploadAvatarForm;
