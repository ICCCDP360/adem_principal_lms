import React from "react";
import Trophy from "../../../assests/images/trophy.svg";
import NoOfStudent from "../../../assests/images/profstudent.svg";
import Clock from "../../../assests/images/clock.svg";
import Spoc from "../../../assests/images/spoc.svg";
import Up from "../../../assests/images/upArrow.svg";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

import "./styles/Dashboard.scss";
function DashboardContent() {
  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%", display: "flex" }}>
            <div className="average-container">
              <div className="average-inside-container">
                <img src={Trophy} className="target-img" />
                <div className="average-content-container">
                  <p className="average-content">
                    Standings
                    {/* {item.lang.avergescore} */}
                  </p>
                  <p className="average-subcontent">7/23</p>
                </div>
              </div>
            </div>
            <div className="average-container">
              <div className="average-inside-container">
                <img src={NoOfStudent} className="target-img" />
                <div className="average-content-container">
                  <p className="average-content">
                    Number of Students
                    {/* {item.lang.avergescore} */}
                  </p>
                  <p className="average-subcontent">1395</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <div className="average-container">
              <div className="average-inside-container">
                <img src={Clock} className="target-img" />
                <div className="average-content-container">
                  <p className="average-content">
                    Total Time Spent
                    {/* {item.lang.avergescore} */}
                  </p>
                  <p className="average-subcontent">251hrs</p>
                </div>
              </div>
            </div>
            <div className="average-container">
              <div className="average-inside-container">
                <img src={Spoc} className="target-img" />
                <div className="average-content-container">
                  <p className="average-content">
                    Program SPOC
                    {/* {item.lang.avergescore} */}
                  </p>
                  <p className="average-subcontent">13</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="average-container1">
          <p style={{ marginTop: "0px", fontSize: "20px", fontWeight: "600" }}>
            Preparatory Courses Performance
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                border: "1px solid #F5F5F5",
                width: "42%",
                padding: "2%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <div>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  12th Standard
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  80%
                </p>
                <div
                  style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                  className="first_circle"
                >
                  <CircularProgressbar value={80} text={`2%`} />
                </div>
                <p>No.of.Students: 193</p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #F5F5F5",
                width: "42%",
                padding: "2%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <div>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#333333",
                  }}
                >
                  11th Standard
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  78%
                </p>
                <div
                  style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                  className="first_circle"
                >
                  <CircularProgressbar value={78} text={`1.5%`} />
                </div>
                <p>No.of.Students: 207</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="average-container2">
        <p style={{ marginTop: "0px", fontSize: "20px", fontWeight: "600" }}>
          Preparatory Courses Performance
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "15%",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                10th Standard
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                95%
              </p>
              <div
                style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                className="first_circle"
              >
                <CircularProgressbar value={95} text={`2%`} />
              </div>
              <p>No.of.Students: 199</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "15%",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                9th Standard
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                90%
              </p>
              <div
                style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                className="first_circle"
              >
                <CircularProgressbar value={90} text={`1.5%`} />
              </div>
              <p>No.of.Students: 201</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "15%",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                8th Standard
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                65%
              </p>
              <div
                style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                className="second_circle"
              >
                <CircularProgressbar value={65} text={`1.5%`} />
              </div>
              <p>No.of.Students: 203</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "15%",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                7th Standard
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                60%
              </p>
              <div
                style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                className="second_circle"
              >
                <CircularProgressbar value={60} text={`1.5%`} />
              </div>
              <p>No.of.Students: 197</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "15%",
              padding: "2%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#333333",
                }}
              >
                6th Standard
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                79%
              </p>
              <div
                style={{ width: "60%", marginLeft: "15%", marginTop: "10px" }}
                className="first_circle"
              >
                <CircularProgressbar value={79} text={`1.5%`} />
              </div>
              <p>No.of.Students: 195</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Statistics</p>
      </div>
    </div>
  );
}

export default DashboardContent;
