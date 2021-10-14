import React from "react";
import Avatar from "./Avatar.svg";
import "./style.css";

const AvatarLarge = ({ avatarImage }) => {
  return (
    <div
      className="avatar large"
      style={{
        backgroundImage: `url(${avatarImage})`,
      }}
    >
      <img src={(avatarImage = Avatar)} alt="Avatar" className="large" />
    </div>
  );
};

export default AvatarLarge;
