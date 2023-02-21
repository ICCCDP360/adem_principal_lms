import React from "react";
import "./styles/Sidebar.scss";
import AdamLogo from "../../assests/images/adamLogo.svg";
import dashboardWhite from "../../assests/images/dashboardWhite.svg";
import dashboardBlack from "../../assests/images/dashboardBlack.svg";
import contentWhite from "../../assests/images/contentWhite.svg";
import contentBlack from "../../assests/images/contentBlack.svg";
import forumWhite from "../../assests/images/forumWhite.svg";
import forumBlack from "../../assests/images/forumBlack.svg";
import LogoutIcon from "../../assests/images/logoutIcon.svg";
import RightArrow from "../../assests/images/rightArrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const stepCount = 0;

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const contentPage = () => {
    navigate("/instructor");
  };
  const studentContent = () => {
    navigate("/student");
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="sidebar-full-container">
        <div>
          <div
            className="header-logo-container"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            <img src={AdamLogo} className="header-logo" />
          </div>
          <div className="header-divider-container">
            <hr className="divider-line" />
          </div>
          <div className="sidecontent-container">
            <div
              className={
                location.pathname === "/dashboard"
                  ? "single-sidecontent-active"
                  : "single-sidecontent"
              }
              onClick={dashboardPage}
            >
              {stepCount === 1 ? (
                <img src={dashboardWhite} />
              ) : (
                <img src={dashboardBlack} />
              )}
              <p className="sidetext-content">
                Dashboard
              </p>
            </div>
            <div
              className={
                location.pathname === "/instructor"
                  ? "single-sidecontent-active"
                  : "single-sidecontent"
              }
              onClick={contentPage}
            >
              {stepCount === 1 ? (
                <img src={contentWhite} />
              ) : (
                <img src={contentBlack} />
              )}
              <p className="sidetext-content">
                Instructors
              </p>
            </div>
            <div
              className={
                location.pathname === "/student"
                  ? "single-sidecontent-active"
                  : "single-sidecontent"
              }
              onClick={studentContent}
            >
              {stepCount === 1 ? (
                <img src={forumWhite} />
              ) : (
                <img src={forumBlack} />
              )}
              <p className="sidetext-content">
                Students
              </p>
            </div>
          </div>
          <div className="end-divider-container">
            <hr className="end-divider-line" />
          </div>
        </div>
        <div className="logout-main-container">
          <button className="logout-btn">
            <div className="logout-btn-container">
              <img
                src={LogoutIcon}
                className='logout-img'
              />
              <p
                className='logout-text'
                onClick={logout}
              >
                Logout
              </p>
            </div>
          </button>
          <div className="slide-btn-container">
            <button className="slide-btn">
              <img src={RightArrow} className="slide-img" />
            </button>
          </div>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </>
  );
}

export default Sidebar;
