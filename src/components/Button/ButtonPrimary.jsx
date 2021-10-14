import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

const ButtonPrimary = ({ text }) => {
  const history = useHistory();
  const handleOnClick = () => history.push("/home");
  return (
    <div className="button primary" onClick={handleOnClick}>
      {text}
    </div>
  );
};

export default ButtonPrimary;
