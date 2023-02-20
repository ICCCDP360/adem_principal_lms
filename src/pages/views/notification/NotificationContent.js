import React from "react";

function NotificationContent() {
  const language = localStorage.getItem("lang");

  return (
    <div style={{ width: "100%", padding: "1%", paddingTop: "0.5%" }}>
      <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
        <div
          style={{
            padding: "1%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #F5F5F5",
            width: "98%",
          }}
        >
          <h5 style={{ fontSize: "17px", fontWeight: "600" }}>Content Admin</h5>
          <h5 style={{ fontSize: "15px", fontWeight: "500" }}>
            New videos was uploaded on thermodynamics for class 6.
          </h5>
          <h5 style={{ fontSize: "18px", fontWeight: "600" }}>01:00</h5>
        </div>
        <div
          style={{
            padding: "1%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #F5F5F5",
            width: "98%",
          }}
        >
          <h5 style={{ fontSize: "17px", fontWeight: "600" }}>Content Admin</h5>
          <h5 style={{ fontSize: "15px", fontWeight: "500" }}>
            New lesson was added in chemistry.
          </h5>
          <h5 style={{ fontSize: "18px", fontWeight: "600" }}> 03:32</h5>
        </div>
        <div
          style={{
            padding: "1%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #F5F5F5",
            width: "98%",
          }}
        >
          <h5 style={{ fontSize: "17px", fontWeight: "600" }}> SPOC</h5>
          <h5 style={{ fontSize: "15px", fontWeight: "500" }}>
            Your question on thermodynamics was answered.
          </h5>
          <h5 style={{ fontSize: "18px", fontWeight: "600" }}> 12:28</h5>
        </div>
        <div
          style={{
            padding: "1%",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #F5F5F5",
            width: "98%",
          }}
        >
          <h5 style={{ fontSize: "17px", fontWeight: "600" }}>SPOC</h5>
          <h5 style={{ fontSize: "15px", fontWeight: "500" }}>
            Your question on thermodynamics was answered.
          </h5>
          <h5 style={{ fontSize: "18px", fontWeight: "600" }}> 04:08</h5>
        </div>
      </div>
    </div>
  );
}

export default NotificationContent;
