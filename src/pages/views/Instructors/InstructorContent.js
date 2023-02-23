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
import "./styles/instructor.scss";

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
    <div className="instructor-content-main-container">
      <div className="instructor-content-main-container-1">
        <div className="instructor-content-sub-container-0">
          <button
            className="instructor-content-sub-container"
            onClick={handleShow}
          >
            <div className="instructor-content-sub-container-1">
              <img src={Plus} alt="Plus" />
              <p className="sub-container-para-1">Teacher</p>
            </div>
          </button>
        </div>
        <div className="sub-container-main-0">
          <div className="sub-container-main-1">
            <input
              className="sub-container-main-input"
              type="search"
              id="gsearch"
              name="gsearch"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img className="img-search-instructor" src={Search} alt="Search" />
          </div>
          <div className="sub-img-container">
            <img className="container-img-sub-1" src={Sort} alt="Sort" />
            <img className="container-img-sub-1" src={filter} alt="Sort" />
            <img className="container-img-sub-1" src={Download} alt="Sort" />
            <img src={Print} alt="Sort" />
          </div>
        </div>
      </div>
      <div className="instructor-table-main-container-0">
        <table className="instructor-table-container-1">
          <tbody>
            <tr
              className="instructor-table-tr"
              // style={{
              //   // fontFamily: "Nunito",
              //   fontWeight: "500",
              //   fontSize: "16px",
              //   textAlign: "center",
              // }}
            >
              <th className="instructor-table-th">S.no</th>
              <th className="instructor-table-th">Teacher Name</th>
              <th className="instructor-table-th">Contact Number</th>
              <th className="instructor-table-th">Assigned Class</th>
              <th className="instructor-table-th">Assigned Subject</th>
              <th className="instructor-table-th">Actions</th>
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
                    className="table-map-tr-0"
                    // style={{
                    //   // fontFamily: "Nunito",
                    //   fontWeight: "400",
                    //   fontSize: "16px",
                    // }}
                    key={value.id}
                  >
                    <td className="table-map-tr-1">{value.id}</td>
                    <td className="table-map-tr-2">{value.teacherName}</td>
                    <td className="table-map-tr-2">{value.contactNumber}</td>
                    <td className="table-map-tr-2">
                      <div
                        className="table-map-tr-3"
                        // style={{
                        //   width: "2.75rem",
                        //   background: "#F5F5F5",
                        //   borderRadius: "7px",
                        //   paddingLeft: "0.5rem",
                        //   marginLeft: "34%",
                        // }}
                      >
                        {value.assignedClass}
                      </div>
                    </td>
                    <td
                      className="table-map-tr-4"
                      // style={{
                      //   border: "1.5px solid #F5F5F5",
                      //   height: "3rem",
                      //   paddingLeft: "1rem",
                      // }}
                    >
                      <div
                        className="table-map-tr-5"
                        // style={{
                        //   width: "3.5rem",
                        //   background: "#F5F5F5",
                        //   borderRadius: "7px",
                        //   paddingLeft: "0.5rem",
                        //   marginLeft: "34%",
                        // }}
                      >
                        {value.assignedSubject}
                      </div>
                    </td>
                    <td
                      className="table-map-tr-6"
                      // style={{
                      //   border: "1px solid #F5F5F5",
                      //   height: "3rem",
                      //   display: "flex",
                      //   justifyContent: "space-evenly",
                      //   textAlign: "center",
                      // }}
                    >
                      <img
                        className="img-edit"
                        onClick={handleShow}
                        // style={{ width: "2rem" }}
                        src={Edit}
                        alt="Edit"
                      />
                      <img
                        className="img-edit"
                        // style={{ width: "2rem" }}
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
      <div className="instructor-pagination-1">
        <div>
          <img src={leftpath} alt="left" />
          <img src={leftpath} alt="left" />
        </div>
        <div
          className="instructor-pagination-2"
          // style={{
          //   display: "flex",
          //   justifyContent: "space-around",
          //   width: "10rem",
          // }}
        >
          <p
            className="instructor-pagination-3"
            // style={{
            //   border: "1px solid #B3E0EE",
            //   borderRadius: "50%",
            //   width: "1.5rem",
            //   textAlign: "center",
            //   background: "#B3E0EE",
            //   fontSize: "16px",
            //   fontWeight: "400",
            // }}
          >
            1
          </p>
          <p className="instructor-pagination-4">2</p>
          <p className="instructor-pagination-4">3</p>
          <p className="instructor-pagination-4">4</p>
          <p className="instructor-pagination-4">5</p>
        </div>
        <div>
          <img src={rightpath} alt="right" />
          <img src={rightpath} alt="right" />
        </div>
      </div>
      <Modal
        className="modal-instructor-container-1"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="modal-instructor-container-2">
            <div className="d-flex justify-content-between">
              <p className="instructor-para">Add Teachers</p>

              <div>
                <button
                  // className="instructor-close"
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
            <div className="w-100">
              <p className="para-modal-name">Name</p>
              <input className="modal-input-jeni" value="Jenita" type="text" />
            </div>
            <div className="w-100">
              <p className="para-modal-name">Mobile Number</p>
              <input className="input-num" value="7305296087" type="number" />
            </div>
            <div className="w-100">
              <p className="para-modal-name">Select Class</p>
              <div className="select-main-1">
                <input value="12th" className="input-12th" type="text" />
                <Dropdown>
                  <Dropdown.Toggle className="drop-instructor-main-1">
                    <img src={dropdown} alt="dropdown" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-instructor">
                    <Dropdown.Item>12th</Dropdown.Item>
                    <Dropdown.Item className="item-1">11th</Dropdown.Item>
                    <Dropdown.Item>10th</Dropdown.Item>
                    <Dropdown.Item className="item-2">9th</Dropdown.Item>
                    <Dropdown.Item className="item-2">8th</Dropdown.Item>
                    <Dropdown.Item className="item-2">7th</Dropdown.Item>
                    <Dropdown.Item className="item-2">6th</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <div>
                <p className="assign-para">Assign Subject</p>
              </div>
              <div className="d-flex">
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
                <div className="modal-check-form">
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
              <div className="modal-data-1">
                <div>
                  <button className="modal-data-2">Add</button>
                </div>
                <div>
                  <button className="modal-data-3">Cancel</button>
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
