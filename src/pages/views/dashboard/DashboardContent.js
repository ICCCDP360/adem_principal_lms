import React, { useState } from "react";
import Calendar from "react-calendar";
import Trophy from "../../../assests/images/trophy.svg";
import NoOfStudent from "../../../assests/images/profstudent.svg";
import Clock from "../../../assests/images/clock.svg";
import Spoc from "../../../assests/images/spoc.svg";
import Up from "../../../assests/images/principalup.svg";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-calendar/dist/Calendar.css";
import "./styles/Dashboard.scss";
import { useNavigate } from "react-router-dom";

function DashboardContent() {
  const navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  const data = [
    {
      id: "1",
      class: "12th",
      noOfStudent: 208,
      averageTime: "43hrs",
      averageScore: "90%",
      rate: "1.9",
    },
    {
      id: "2",
      class: "11th",
      noOfStudent: 189,
      averageTime: "46hrs",
      averageScore: "80%",
      rate: "2",
    },
    {
      id: "3",
      class: "10th",
      noOfStudent: 176,
      averageTime: "51hrs",
      averageScore: "69%",
      rate: "1.8",
    },
    {
      id: "4",
      class: "9th",
      noOfStudent: 222,
      averageTime: "40hrs",
      averageScore: "80%",
      rate: "1.6",
    },
    {
      id: "5",
      class: "8th",
      noOfStudent: 190,
      averageTime: "42hrs",
      averageScore: "82%",
      rate: "1.2",
    },
    {
      id: "6",
      class: "7th",
      noOfStudent: 180,
      averageTime: "50hrs",
      averageScore: "85%",
      rate: "1.5",
    },
    {
      id: "7",
      class: "6th",
      noOfStudent: 210,
      averageTime: "60hrs",
      averageScore: "75%",
      rate: "2",
    },
  ];
  return (
    <div style={{ overflow: "hidden" }}>
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
          <p
            style={{
              marginTop: "0px",
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            Preparatory Courses Performance
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                border: "1px solid #F5F5F5",
                width: "48%",
                padding: "2%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <div onClick={() => navigate("/student")}>
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
                <p style={{ marginBottom: "0px" }}>No.of.Students: 193</p>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #F5F5F5",
                width: "48%",
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
                <p style={{ marginBottom: "0px" }}>No.of.Students: 207</p>
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
              width: "18%",
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
              <p style={{ marginBottom: "0px" }}>No.of.Students: 199</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "18%",
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
              <p style={{ marginBottom: "0px" }}>No.of.Students: 201</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "18%",
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
              <p style={{ marginBottom: "0px" }}>No.of.Students: 203</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "18%",
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
              <p style={{ marginBottom: "0px" }}>No.of.Students: 197</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #F5F5F5",
              width: "18%",
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
              <p style={{ marginBottom: "0px" }}>No.of.Students: 195</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "65%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "1%",
            margin: "10px",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "600" }}>Statistics</p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1.5px solid #F5F5F5",
              height: "3rem",
            }}
          >
            <tbody>
              <tr
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                  Class
                </th>
                <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                  No.of.Students
                </th>
                <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                  Average Time
                </th>
                <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                  Average Score
                </th>
                <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                  Rate
                </th>
              </tr>
              {data.map((value) => {
                return (
                  <tr
                    style={{
                      // fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                    key={value.id}
                  >
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                        textAlign: "center",
                      }}
                    >
                      {value.class}
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                      }}
                    >
                      {value.noOfStudent}
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                      }}
                    >
                      {value.averageTime}
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                      }}
                    >
                      <div>{value.averageScore}</div>
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                      }}
                    >
                      <div>
                        {value.rate}{" "}
                        <img src={Up} style={{ marginTop: "-3px" }} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          style={{
            width: "35%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "1%",
            margin: "10px",
            height: "100%",
          }}
        >
          <Calendar
            onChange={onChange}
            value={value}
            // style={{ width: "97%" }}
            className="calendar"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
