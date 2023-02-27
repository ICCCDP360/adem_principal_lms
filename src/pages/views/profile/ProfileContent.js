import React from "react";
import Profiles from "../../../assests/images/school.svg";
import proof from "../../../assests/images/Frame 2148.svg";

function ProfileContent() {
  return (
    <div className="profile-content-main-container-1">
      <div className="profile-content-container-1">
        <div className="profile-content-container-2">
          <img className="profile-img" src={Profiles} alt="Profile" />
          <p className="profile-para">Xavier Matriculation</p>
          <p className="profile-para-1">School</p>
        </div>
      </div>
      <div className="profile-content-main-container-2">
        <p className="school-info">School Info</p>
        <div
          className="d-flex justify-content-between w"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Principal Name</p>
            <input
              value="Bala"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>SPOC Name</p>
            <input
              value="kalai"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>School Name</p>
            <input
              value="Xavier matriculation school"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Contact Number</p>
            <input
              value="868768767678"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="number"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>School Email</p>
            <input
              value="xavier@edu.org"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Date Of Joining</p>
            <input
              value="28/11/2000"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Address</p>
            <input
              value="2nd cross street, Elim Nagar."
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>City </p>
            <input
              value="chennai"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center w-100"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   width: "100%",
          // }}
        >
          <div
            className="w-100"
            // style={{ width: "100%" }}
          >
            <p style={{ marginBottom: "0px" }}>Pincode</p>
            <input
              value="6000001"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
          <div className="w-100">
            <p style={{ marginBottom: "0px" }}>State</p>
            <input
              value="Tamilnadu"
              style={{
                width: "95%",
                padding: "1.5%",
                borderRadius: "5px",
                border: "1px solid gray",
                marginBottom: "2%",
                backgroundColor: "#F5F5F5",
              }}
              type="text"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <p style={{ marginBottom: "0px" }}>Proof</p>
            <img src={proof} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
