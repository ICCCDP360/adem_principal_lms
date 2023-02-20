import React from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";

function DashboardHeader() {
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
            Teachers
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            total Number of Teachers: 10
          </p>
        </div>
        <div style={{ display: "flex", padding: "1%", paddingBottom: "0px" }}>
          <div style={{ marginRight: "30px", marginTop: "7px" }}>
            <img src={Notification} />
          </div>
          <div>
            <img style={{ marginTop: "0.38rem" }} src={School} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DashboardHeader;
