import React from "react";
import Notification from "../../../assests/images/notify.svg";
import School from "../../../assests/images/school.svg";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles/StudentContent.scss";

const StudentsHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="student-Header-main">
        <div className="student-subheader">
          <p className="student-header-para-student">Students</p>
          <p className="student-header-para-total">
            total Number of Students: 1395
          </p>
        </div>
        <div className="student-subheader-container-2">
          <div className="student-container-2-dropdown">
            <Dropdown>
              <Dropdown.Toggle className="dropdown-container-img-2">
                <img src={Notification} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <div className="dropdown-menu-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="dropdown-para">Content_Admin</p>
                    <p className="dropdown-para">01:00</p>
                  </div>
                  <p className="dropdown-sub-para">
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr className="dropdown-menu-hr" />
                <div className="dropdown-menu-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="dropdown-para">Content_Admin</p>
                    <p className="dropdown-para">02:38</p>
                  </div>
                  <p className="dropdown-sub-para">
                    New lesson was added in chemistry
                  </p>
                </div>
                <hr className="dropdown-menu-hr" />
                <div className="dropdown-menu-sub-1">
                  <div className="d-flex justify-content-between">
                    <p className="dropdown-para">SPOC</p>
                    <p className="dropdown-para">12:30</p>
                  </div>
                  <p className="dropdown-sub-para ">
                    New videos was uploaded on th...
                  </p>
                </div>
                <hr className="dropdown-menu-hr" />
                <p
                  className="dropdown-view-section"
                  onClick={() => navigate("/notification")}
                >
                  View all
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <img className="student-head-img-2" src={School} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default StudentsHeader;
