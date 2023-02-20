import React from "react";
// import Profiles from "../../../assets/images/proImg.svg";
// import Camp from "../../../assets/images/rank.svg";
import Profiles from "../../../assests/images/school.svg";
// import Camp from "../../../assests/images/rank.svg";
import proof from "../../../assests/images/Frame 2148.svg";

function ProfileContent() {
  const language = localStorage.getItem("lang");

  return (
    <div
      style={{
        width: "96%",
        background: "white",
        padding: "1rem",
        display: "flex",
        borderRadius: "10px",
        marginLeft: "2%",
        marginRight: "2%",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          border: "1px solid #A2A2A2",
          padding: "1rem",
          borderRadius: "10px",
          alignItems: "center",
          height: "15rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Profiles} alt="Profile" style={{ width: "128px" }} />
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "0px",
              width: "240px",
            }}
          >
            Xavier Matriculation
          </p>
          <p style={{ fontSize: "24px", fontWeight: 700, marginBottom: "0px" }}>
            School
          </p>
        </div>
      </div>
      <div
        style={{
          width: "75%",
          border: "1px solid #A2A2A2",
          borderRadius: "10px",
          marginLeft: "1rem",
          padding: "1rem 1rem 1rem 1rem",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "700" }}>School Info</p>
        <div
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
        {/* <p style={{ fontSize: "20px", fontWeight: "700" }}>School Info</p> */}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Role Number</p>
            <input
              value="18BCS093"
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "100%" }}>
              <p style={{ marginBottom: "0px" }}>Standard</p>
              <input
                value="7th"
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
              <p style={{ marginBottom: "0px" }}>Section</p>
              <input
                value="B"
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
        </div> */}
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
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
          <div style={{ width: "100%" }}>
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <p style={{ marginBottom: "0px" }}>Proof</p>
            <img src={proof} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
