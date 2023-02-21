import React from "react";
import School from "../../../assests/images/school.svg";
import Notification from "../../../assests/images/notify.svg";
import { useNavigate } from "react-router";
import "./styles/profileheader.scss";
import { Dropdown } from "react-bootstrap";

function ProfileHeader() {
  const navigate = useNavigate();
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
            Profile
          </p>
        </div>
        <div
          style={{ display: "flex", paddingBottom: "0px", paddingRight: "1%" }}
        >
          <div style={{ marginRight: "30px" }}>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "310px",
                  marginLeft: "-250px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>Content_Admin</p>
                    <p style={{ marginBottom: "0px" }}>01:00</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>Content_Admin</p>
                    <p style={{ marginBottom: "0px" }}>02:38</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New lesson was added in chemistry
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <div
                  style={{
                    paddingLeft: "5%",
                    fontSize: "18px",
                    fontWeight: "600",
                    paddingRight: "5%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ marginBottom: "0px" }}>SPOC</p>
                    <p style={{ marginBottom: "0px" }}>12:30</p>
                  </div>
                  <p style={{ marginBottom: "0px", fontSize: "17px" }}>
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr
                  style={{
                    marginTop: "5px",
                    borderTop: "2px solid gray",
                    marginBottom: "5px",
                  }}
                />
                <p
                  //   onClick={() => navigate("/notification")}
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0395C4",
                    paddingLeft: "5%",
                    marginBottom: "5px",
                  }}
                  onClick={() => navigate("/notification")}
                >
                  View all
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <img
              src={School}
              style={{ cursor: "pointer" }}
              // onClick={Schoolprofile}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProfileHeader;
