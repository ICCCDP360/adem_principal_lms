import React from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigate = useNavigate();

  function Schoolprofile() {
    navigate("/profile");
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "1%" }}>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#333333",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Welcome, Xavier Matriculation School
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Last logged in: 18 Jan, 2023 06:00 pm{" "}
          </p>
        </div>
        <div style={{ display: "flex", padding: "1%", paddingBottom: "0px" }}>
          <div style={{ marginRight: "30px", marginTop: "7px" }}>
            <img src={Notification} />
          </div>
          <div>
            <img src={School} onClick={Schoolprofile} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DashboardHeader;
