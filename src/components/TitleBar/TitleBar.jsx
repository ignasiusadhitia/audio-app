import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Menu from "./menu-variant.svg";
import Logo from "./logo.svg";
import Avatar from "./avatar.svg";

const TitleBar = ({ text }) => {
  const history = useHistory();
  const handleOnClick = () => history.push("/");
  return (
    <div className="title">
      <div onClick={handleOnClick}>
        <img src={Menu} alt="Menu" className="icon" />
      </div>
      <img src={Logo} alt="Logo" className="icon" />
      <img src={Avatar} alt="Avatar" className="icon" />
    </div>
  );
};

export default TitleBar;
