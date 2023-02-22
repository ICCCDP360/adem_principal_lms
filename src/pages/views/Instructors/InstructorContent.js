import React, { useState } from "react";
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
import Modal from "react-bootstrap/Modal";
import { Dropdown } from "react-bootstrap";

import dropdown from "../../../assests/images/dropdown.svg";

function InstructorContent() {
  const [search, setSearch] = useState("");
  // const handlesubmit = () => {
  //   setShowScore(true);
  //   setShow(false);
  // };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [math, setMath] = useState(false);

  const data = [
    {
      id: "1",
      teacherName: "Kalai",
      contactNumber: "7305296087",
      assignedClass: "12th",
      assignedSubject: "Math",
      Action: "",
    },
    {
      id: "2",
      teacherName: "Malai",
      contactNumber: "8790875643",
      assignedClass: "9th",
      assignedSubject: "Science",
      Action: "",
    },
    {
      id: "3",
      teacherName: "Malar",
      contactNumber: "9867543465",
      assignedClass: "7th",
      assignedSubject: "Tamil",
      Action: "",
    },
    {
      id: "4",
      teacherName: "Bala",
      contactNumber: "8970564356",
      assignedClass: "9th",
      assignedSubject: "English",
      Action: "",
    },
    {
      id: "5",
      teacherName: "Indhu",
      contactNumber: "8870100111",
      assignedClass: "10th",
      assignedSubject: "Science",
      Action: "",
    },
    {
      id: "6",
      teacherName: "Seenu",
      contactNumber: "9791837486",
      assignedClass: "11th",
      assignedSubject: "English",
      Action: "",
    },
    {
      id: "7",
      teacherName: "Manoj",
      contactNumber: "9842134487",
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
            onClick={handleShow}
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
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "white",
                  marginTop: "0.75rem",
                }}
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
              onChange={(e) => setSearch(e.target.value)}
            />
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
                textAlign: "center",
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
            {data
              .filter((value) => {
                return search.toLowerCase() === ""
                  ? value
                  : value.teacherName.toLowerCase().includes(search) ||
                      value.Action.toLowerCase().includes(search) ||
                      value.assignedSubject.toLowerCase().includes(search) ||
                      value.assignedClass.toLowerCase().includes(search) ||
                      value.contactNumber.toLowerCase().includes(search) ||
                      value.id.toLowerCase().includes(search);
              })
              .map((value) => {
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
                        textAlign: "center",
                      }}
                    >
                      {value.teacherName}
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                        paddingLeft: "1rem",
                        textAlign: "center",
                      }}
                    >
                      {value.contactNumber}
                    </td>
                    <td
                      style={{
                        border: "1.5px solid #F5F5F5",
                        height: "3rem",
                        paddingLeft: "1rem",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "2.75rem",
                          background: "#F5F5F5",
                          borderRadius: "7px",
                          paddingLeft: "0.5rem",
                          // textAlign: "center",
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
                        // textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "3.5rem",
                          background: "#F5F5F5",
                          borderRadius: "7px",
                          paddingLeft: "0.5rem",
                          textAlign: "center",
                        }}
                      >
                        {value.assignedSubject}
                      </div>
                    </td>
                    <td
                      style={{
                        border: "1px solid #F5F5F5",
                        height: "3rem",
                        display: "flex",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                      }}
                    >
                      <img
                        onClick={handleShow}
                        style={{ width: "2rem" }}
                        src={Edit}
                        alt="Edit"
                      />
                      <img
                        style={{ width: "2rem" }}
                        src={Delete}
                        alt="delete"
                      />
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
          // alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "1rem",
          paddingRight: "1.5rem",
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
      <Modal
        show={show}
        onHide={handleClose}
        // style={{
        //   marginTop: "15%",
        //   width: "70%",
        // }}
      >
        <Modal.Body>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "20px", fontWeight: "600" }}>
                Add Teachers
              </p>
              <div></div>
              <div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ border: "none", background: "white" }}
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Name
              </p>
              <input
                value="Jenita"
                style={{
                  width: "95%",
                  padding: "1.5%",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginBottom: "2%",
                  marginTop: "2%",
                }}
                type="text"
              />
            </div>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Mobile Number
              </p>
              <input
                value="7305296087"
                style={{
                  width: "95%",
                  padding: "1.5%",
                  borderRadius: "5px",
                  border: "1px solid gray",
                  marginBottom: "2%",
                  marginTop: "2%",
                }}
                type="number"
              />
            </div>
            <div style={{ width: "100%" }}>
              <p
                style={{
                  marginBottom: "0px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Select Class
              </p>
              <div
                style={{
                  width: "95%",
                  border: "1px solid gray",
                  marginTop: "2%",
                  marginBottom: "2%",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <input
                  value="12th"
                  style={{
                    width: "90%",
                    padding: "1.5%",
                    // borderRadius: "5px",
                    // border: "1px solid gray",
                    // marginBottom: "2%",
                    // marginTop: "2%",
                    border: "none",
                  }}
                  type="text"
                />
                <Dropdown>
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                    }}
                  >
                    <img src={dropdown} alt="dropdown" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ border: "1.5px  solid #A2A2A2" }}>
                    <Dropdown.Item>12th</Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderTop: "1.5px  solid #A2A2A2",
                        borderBottom: "1.5px  solid #A2A2A2",
                      }}
                    >
                      11th
                    </Dropdown.Item>
                    <Dropdown.Item>10th</Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderTop: "1.5px  solid #A2A2A2",
                      }}
                    >
                      9th
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderTop: "1.5px  solid #A2A2A2",
                      }}
                    >
                      8th
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderTop: "1.5px  solid #A2A2A2",
                      }}
                    >
                      7th
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderTop: "1.5px  solid #A2A2A2",
                      }}
                    >
                      6th
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <div>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>
                  Assign Subject
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Mathematics
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Physics
                    </label>
                  </div>
                </div>
                <div style={{ marginLeft: "2%" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Chemistry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Biology
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "42%",
                  justifyContent: "space-between",
                  marginTop: "4%",
                }}
              >
                <div>
                  <button
                    style={{
                      width: "88px",
                      height: "40px",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#FFFFFF",
                      background: "#0395C4",
                      borderRadius: "25px",
                      border: "none",
                    }}
                  >
                    Add
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      width: "88px",
                      height: "40px",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#0395C4",
                      // background: "#0395C4",
                      borderRadius: "25px",
                      border: "none",
                      border: "1.5px solid #0395C4",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InstructorContent;
