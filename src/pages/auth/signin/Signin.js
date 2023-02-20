import React from "react";
import logo from "../../../assests/images/adems_logo.svg";

import "../styles/mainpage.scss";
import Slideshow from "./../../views/components/Slider.js/SliderShow";
import { SliderData } from "./../../views/components/Slider.js/SliderData";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="signIn-container">
      <img src={logo} style={{ marginLeft: "28px", marginTop: "22px" }} />
      <div
        style={{
          width: "226px",
          height: "30px",
          backgroundColor: "white",
          padding: "0%",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "41%",
          marginTop: "3%",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "700", marginTop: "5%" }}>
          School Administration
        </p>
      </div>
      <div className="center-container">
        <div className="leftside-container">
          <div className="innerside">
            <h1 className="signin-header">Sign in</h1>
            <p className="signin-username">User Name</p>
            <div className="user-container">
              <input
                className="input-field-user"
                type="text"
                placeholder="Enter username"
              />
            </div>{" "}
            <p className="signin-username"> Password</p>
            <div className="user-container">
              <input
                className="input-field-user"
                type="password"
                placeholder=" Password"
              />
            </div>
            <p
              className="d-flex justify-content-end"
              style={{ color: "#0395C4", cursor: "pointer" }}
              onClick={() => navigate("/forgot_password")}
            >
              Forgot Password ?
            </p>
            <button
              className="signin-btn"
              onClick={() => navigate("dashboard")}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="rightside-container">
          <Slideshow slides={SliderData} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
