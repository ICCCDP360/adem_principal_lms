import React from "react";
import Sort from "../../../assests/images/sort.svg";
import Plus from "../../../assests/images/plus.svg";
import Search from "../../../assests/images/search.svg";
import filter from "../../../assests/images/filter.svg";
import Print from "../../../assests/images/printfull.svg";
import Download from "../../../assests/images/download.svg";
import Delete from "../../../assests/images/delete.svg";
import Edit from "../../../assests/images/edit.svg";
import leftpath from "../../../assests/images/leftpath.svg";
import rightpath from "../../../assests/images/rightpath.svg";

function InstructorContent() {
  const data = [
    {
      id: "1",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "12th",
      assignedSubject: "math",
      Action: "",
    },
    {
      id: "2",
      teacherName: "Malai",
      contactNumber: "7305296087",
      assignedClass: "9th",
      assignedSubject: "Science",
      Action: "",
    },
    {
      id: "3",
      teacherName: "Malar",
      contactNumber: "7305296087",
      assignedClass: "7th",
      assignedSubject: "Tamil",
      Action: "",
    },
    {
      id: "4",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "9th",
      assignedSubject: "English",
      Action: "",
    },
    {
      id: "5",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "10th",
      assignedSubject: "Science",
      Action: "",
    },
    {
      id: "6",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "11th",
      assignedSubject: "English",
      Action: "",
    },
    {
      id: "7",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "9th",
      assignedSubject: "Tamil",
      Action: "",
    },
  ];
  return (
    <div style={{ background: "white", borderRadius: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        <div>
          <button
            style={{
              background: " #0395C4",
              borderRadius: "25px",
              display: "flex",
              width: "121px",
              height: "40px",
              border: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "6rem",
                alignItems: "center",
              }}
            >
              <img src={Plus} alt="Plus" />
              <p
                style={{ fontWeight: "600", fontSize: "18px", color: "white" }}
              >
                Teacher
              </p>
            </div>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            width: "27.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              border: "1.5px solid black",
              borderRadius: "25px",
            }}
          >
            <input
              style={{
                width: "250px",
                height: "37px",
                border: "none",
                borderRadius: "25px",
              }}
              type="search"
              id="gsearch"
              name="gsearch"
            ></input>
            <img style={{ marginRight: "0.5rem" }} src={Search} alt="Search" />
          </div>
          <div>
            <img style={{ paddingRight: "0.5rem" }} src={Sort} alt="Sort" />
            <img style={{ paddingRight: "0.5rem" }} src={filter} alt="Sort" />
            <img style={{ paddingRight: "0.5rem" }} src={Download} alt="Sort" />
            <img src={Print} alt="Sort" />
          </div>
        </div>
      </div>
      <div>
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
                // fontFamily: "Nunito",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                S.no
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Teacher Name
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Contact Number
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Assigned Class
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Assigned Subject
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Actions
              </th>
            </tr>
            {data.map((value) => {
              return (
                <tr
                  style={{
                    // fontFamily: "Nunito",
                    fontWeight: "400",
                    fontSize: "16px",
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
                    {value.id}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.teacherName}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.contactNumber}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        background: "#F5F5F5",
                        borderRadius: "7px",
                        paddingLeft: "0.5rem",
                      }}
                    >
                      {value.assignedClass}
                    </div>
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3.5rem",
                        background: "#F5F5F5",
                        borderRadius: "7px",
                        paddingLeft: "0.5rem",
                      }}
                    >
                      {value.assignedSubject}
                    </div>
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <img style={{ width: "2rem" }} src={Delete} alt="delete" />
                    <img style={{ width: "2rem" }} src={Edit} alt="Edit" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <img src={leftpath} alt="left" />
          <img src={leftpath} alt="left" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "10rem",
          }}
        >
          <p
            style={{
              border: "1px solid #B3E0EE",
              borderRadius: "50%",
              width: "1.5rem",
              textAlign: "center",
              background: "#B3E0EE",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            1
          </p>
          <p
            style={{
              border: "1.5px solid #0395C4",
              borderRadius: "50%",
              width: "1.5rem",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            2
          </p>
          <p
            style={{
              border: "1.5px solid #0395C4",
              borderRadius: "50%",
              width: "1.5rem",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            3
          </p>
          <p
            style={{
              border: "1.5px solid #0395C4",
              borderRadius: "50%",
              width: "1.5rem",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            4
          </p>
          <p
            style={{
              border: "1.5px solid #0395C4",
              borderRadius: "50%",
              width: "1.5rem",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            5
          </p>
        </div>
        <div>
          <img src={rightpath} alt="right" />
          <img src={rightpath} alt="right" />
        </div>
      </div>
    </div>
  );
}

export default InstructorContent;
