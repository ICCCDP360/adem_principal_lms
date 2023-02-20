import React from "react";
import Profile from "../../../assests/images/school.svg";
import notifi from "../../../assests/images/notify.svg";

function NotificationHeader() {
  return (
    <div style={{ width: "100%", padding: "2%", display: "flex" }}>
      <div style={{ width: "50%" }}>
        <p
          style={{
            marginBottom: "0px",

            fontSize: "24px",
            fontWeight: "700",
            width: "60px",
          }}
        >
          Nofification
        </p>
      </div>
      <div style={{ width: "50%", marginLeft: "85%" }}>
        <img src={notifi} style={{ marginRight: "10px" }} />
        <img src={Profile} style={{ marginLeft: "15px" }} />
      </div>
    </div>
  );
}

export default NotificationHeader;
