import React from "react";
import Avatar from "./Avatar.svg";
import "./style.css";

const AvatarSmall = ({ avatarImage }) => {
  return (
    <div
      className="avatar small"
      style={{
        backgroundImage: `url(${avatarImage})`,
      }}
    >
      <img src={(avatarImage = Avatar)} alt="Avatar" className="small" />
    </div>
  );
};

export default AvatarSmall;
