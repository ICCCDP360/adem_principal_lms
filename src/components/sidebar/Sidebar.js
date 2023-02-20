import React from "react";
import "./styles/Sidebar.scss";
// import AdamLogo from "../../assets/images/adamLogo.svg";
// import dashboardWhite from "../../assets/images/dashboardWhite.svg";
// import dashboardBlack from "../../assets/images/dashboardBlack.svg";
// import contentWhite from "../../assets/images/contentWhite.svg";
// import contentBlack from "../../assets/images/contentBlack.svg";
// import forumWhite from "../../assets/images/forumWhite.svg";
// import forumBlack from "../../assets/images/forumBlack.svg";
// import LogoutIcon from "../../assets/images/logoutIcon.svg";
// import RightArrow from "../../assets/images/rightArrow.svg";
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
// import axios from "axios";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [stepCount, setStepCount] = useState(0);
  // const [taskRem, setTaskRem] = useState([]);
  const stepCount = 0;
  const language = localStorage.getItem("lang");

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8080/api/v1/student/sidebar/content?lang=${language}`
  //     )
  //     .then((res) => {
  //       setTaskRem(res.data);
  //     }, []);
  // });

  const dashboardPage = () => {
    navigate("/dashboard");
  };

  const contentPage = () => {
    navigate("/instructor");
  };

  const forumPage = () => {
    navigate("/forum");
  };

  const logouts = () => {
    navigate("/sign_in");
  };

  return (
    <>
      {/* {taskRem.slice(0, 1).map((item, index) => {
        return ( */}
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
                {/* {item.lang.dashboard} */}
                {/* {language == "english" ? "Dashboard" : "தகவல்பலகை"} */}
                Dashboard
              </p>
            </div>
            <div
              className={
                location.pathname === "/content"
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
                {/* {item.lang.course} */}
                {/* {language == "english" ? "Instructors" : "பாடநெறி"} */}
                Instructors
              </p>
            </div>
            <div
              className={
                location.pathname === "/forum"
                  ? "single-sidecontent-active"
                  : "single-sidecontent"
              }
              onClick={forumPage}
            >
              {stepCount === 1 ? (
                <img src={forumWhite} />
              ) : (
                <img src={forumBlack} />
              )}
              <p className="sidetext-content">
                {/* {item.lang.qna} */}
                {/* {language == "english" ? "Students" : "கேள்வி பதில்"} */}
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
                className={
                  language == "english" ? "logout-img" : "logout-img-tamil"
                }
              />
              <p
                className={
                  language == "english" ? "logout-text" : "logout-text-tamil"
                }
                onClick={logouts}
              >
                {/* {item.lang.logout} */}
                {/* {language == "english" ? "Logout" : "வெளியேறு"} */}
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
