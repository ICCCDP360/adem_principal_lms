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
import dot from "../../../assests/images/3dot.svg";
import { Dropdown } from "react-bootstrap";
import './styles/StudentContent.scss'

const StuedentsContent = () => {
  const data = [
    {
      id: "1",
      studentName: "Kalai",
      contactNumber: "7305296087",
      goAdemId: "13458",
      rollNumber: "2A765",
      class: "9",
      section: "A",
      assignedTeacher: "malar",
      Action: "",
    },
    {
      id: "2",
      studentName: "Sangavi",
      contactNumber: "7305296087",
      goAdemId: "09856",
      rollNumber: "5B786",
      class: "10",
      section: "B",
      assignedTeacher: "mathi",
      Action: "",
    },
    {
      id: "3",
      studentName: "Ramesh",
      contactNumber: "7305296087",
      goAdemId: "13479",
      rollNumber: "7A543",
      class: "12",
      section: "A",
      assignedTeacher: "Raj",
      Action: "",
    },
    {
      id: "4",
      studentName: "Bhagya",
      contactNumber: "7305296087",
      goAdemId: "05648",
      rollNumber: "6B435",
      class: "7",
      section: "B",
      assignedTeacher: "Naveen",
      Action: "",
    },
    {
      id: "5",
      studentName: "Suresh",
      contactNumber: "7305296087",
      goAdemId: "12874",
      rollNumber: "8C543",
      class: "9",
      section: "C",
      assignedTeacher: "Balaji",
      Action: "",
    },
    {
      id: "6",
      studentName: "Kanish",
      contactNumber: "7305296087",
      goAdemId: "06725",
      rollNumber: "5A984",
      class: "12",
      section: "A",
      assignedTeacher: "Lokesh",
      Action: "",
    },
    {
      id: "7",
      studentName: "Radhana",
      contactNumber: "7305296087",
      goAdemId: "09358",
      rollNumber: "6B372",
      class: "7",
      section: "B",
      assignedTeacher: "Bharathi",
      Action: "",
    },
    {
      id: "8",
      studentName: "Aasifa",
      contactNumber: "7305296087",
      goAdemId: "17364",
      rollNumber: "3A654",
      class: "9",
      section: "A",
      assignedTeacher: "Karthika",
      Action: "",
    },
    {
      id: "9",
      studentName: "Ganesh",
      contactNumber: "7305296087",
      goAdemId: "06845",
      rollNumber: "6C345",
      class: "11",
      section: "C",
      assignedTeacher: "Prasanth",
      Action: "",
    },
    {
      id: "10",
      studentName: "Manoj",
      contactNumber: "7305296087",
      goAdemId: "14793",
      rollNumber: "8A345",
      class: "7",
      section: "A",
      assignedTeacher: "Pavithra",
      Action: "",
    },
    {
      id: "11",
      studentName: "Mathi",
      contactNumber: "7305296087",
      goAdemId: "07635",
      rollNumber: "7B543",
      class: "12",
      section: "B",
      assignedTeacher: "Hari",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "15rem",
            alignItems: "center",
            marginTop: "-1rem",
          }}
        >
          {/* <p
            style={{
              background: "#B3E0EE",
              borderRadius: "10px",
              width: "2.5rem",
              fontWeight: "600",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            All
          </p> */}
          <Dropdown style={{ width: "10px" }}>
            <Dropdown.Toggle
              style={{
                background: "#B3E0EE",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "20px",
                textAlign: "center",
                border: "none",
                color: "black",
                // backgroundColor: "transparent",
                // border: "transparent",
              }}
            >
              All
            </Dropdown.Toggle>

            <Dropdown.Menu style={{textAlign:'center'}}>
              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>All</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>12</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>11</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>
              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>10</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>9</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>8</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>7</Dropdown.Item>
              <hr style={{ color: "#0395C4",margin:'0px 3%' }}></hr>

              <Dropdown.Item style={{fontSize:'16px',fontWeight:'500'}}>6</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p style={{ marginBottom:'0px' }}>Number of Students: 1395</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "27.5rem",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "-1rem",
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
            marginTop: "-1rem",
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
                GoAdem <br />
                Rank
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Student Name
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Contact Number
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                GoAdem Id
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Roll Number
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Class
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Section
              </th>
              <th style={{ border: "1.5px solid #F5F5F5", height: "3rem" }}>
                Assigned <br /> Teacher
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
                    {value.studentName}
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
                    {value.goAdemId}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.rollNumber}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.class}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.section}
                  </td>
                  <td
                    style={{
                      border: "1.5px solid #F5F5F5",
                      height: "3rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    {value.assignedTeacher}
                  </td>

                  <td
                    style={{
                      border: "1px solid #F5F5F5",
                      height: "3rem",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{
                          backgroundColor: "transparent",
                          border: "transparent",
                        }}
                      >
                        <img style={{ width: "2rem" }} src={dot} alt="dot" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ border: "1.5px  solid #A2A2A2" }}>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item
                          style={{
                            borderTop: "1.5px  solid #A2A2A2",
                            borderBottom: "1.5px  solid #A2A2A2",
                          }}
                        >
                          Suspend
                        </Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
    </div>
  );
};

export default StuedentsContent;
