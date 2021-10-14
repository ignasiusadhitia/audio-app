import React from "react";
import StatusBarLight from "../../components/StatusBar/StatusBarLight";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Logo2 from "./logo-2.svg";
import "./style.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <StatusBarLight />
      <div
        style={{
          display: "flex",
          marginTop: "10%",
          marginBottom: "55%",
          justifyContent: "center",
        }}
      >
        <img src={Logo2} alt="logo-2" />
      </div>
      <div style={{ margin: "24px" }}>
        <input type="text" placeholder="Email" className="search-box" />
        <input type="text" placeholder="Password" className="search-box" />
      </div>
      <div className="text2 forgot">Forgot Password</div>
      <div style={{ margin: "24px" }}>
        <ButtonPrimary text="Sign In" />
      </div>
      <div className="text2">
        <div>Didn’t have any account?</div>
        <div className="sign-up">Sign Up here</div>
      </div>
    </div>
  );
};

export default Auth;
