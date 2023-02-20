import React, { useState } from "react";
import Profile from "../../../assests/images/school.svg";
import Notification from "../../../assests/images/notify.svg";
import notifi from "../../../assests/images/notify.svg";
import popup from "../../../assests/images/popup.svg";
import logo1 from "../../../assests/images/Ellipse 157.svg";
import key from "../../../assests/images/key.svg";
import switchacc from "../../../assests/images/switch.svg";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import "./styles/profileheader.scss";
import { Dropdown } from "react-bootstrap";

function ProfileHeader() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const language = localStorage.getItem("lang");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const switchAccount = () => {
    navigate("/sign_in");
  };

  const englishLang = () => {
    localStorage.setItem("lang", "english");
    window.location.reload();
  };

  //   const tamilLang = () => {
  //     localStorage.setItem("lang", "tamil");
  //     window.location.reload();
  //   };
  return (
    <div style={{ width: "100%", padding: "2%", display: "flex" }}>
      {/* <div className="task-header-container">
        <div className="task-head-text">
          <p
            style={{
              marginBottom: "0px",
              marginTop: "10%",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Profile
          </p>
        </div>
        <div className="rightside-taskcontainer" style={{ cursor: "pointer" }}>
          <img src={notifi} />
          <div>
            <img src={Profile} onClick={handleShow} />
          </div>
        </div>
      </div> */}
      <div style={{ width: "50%" }}>
        <p
          style={{
            marginBottom: "0px",

            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Profile
        </p>
      </div>
      <div style={{ width: "50%", marginLeft: "85%" }}>
        <img src={notifi} style={{ marginRight: "10px" }} />
        <img src={Profile} style={{ marginLeft: "15px" }} />
      </div>
    </div>
  );
}

export default ProfileHeader;
