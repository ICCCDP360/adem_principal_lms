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
        <div className="d-flex justify-content-between w">
          <div className="w-100">
            <p className="para-profile-content">Principal Name</p>
            <input className="input-data-1" value="Bala" type="text" />
          </div>
          <div className="w-100">
            <p className="para-profile-content">SPOC Name</p>
            <input value="kalai" className="input-data-1" type="text" />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">School Name</p>
            <input
              value="Xavier matriculation school"
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Contact Number</p>
            <input
              value="868768767678"
              className="input-data-1"
              type="number"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">School Email</p>
            <input
              value="xavier@edu.org"
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Date Of Joining</p>
            <input value="28/11/2000" className="input-data-1" type="text" />
          </div>
        </div>

        <div className="d-flex justify-content-between w-100">
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">Address</p>
            <input
              value="2nd cross street, Elim Nagar."
              className="input-data-1"
              type="text"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="para-profile-content">City </p>
            <input value="chennai" className="input-data-1" type="text" />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <p className="para-profile-content">Pincode</p>
            <input value="6000001" className="input-data-1" type="text" />
          </div>
          <div className="w-100">
            <p className="para-profile-content">State</p>
            <input value="Tamilnadu" className="input-data-1" type="text" />
          </div>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <p className="para-profile-content">Proof</p>
            <img src={proof} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
