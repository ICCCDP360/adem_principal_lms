import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
// import "../styles/signin.scss";
import "../styles/mainpage.scss";
// import logo from "../../../assets/images/logo_adems.svg";
import logo from "../../../assests/images/logo_adems.svg";
import { SliderData } from "../../views/components/Slider.js/SliderData";
import Slideshow from "../../views/components/Slider.js/SliderShow";

function Signin() {
  const navigate = useNavigate();

  const slideChange = () => {
    navigate("/dashboard");
  };

  // const data = {
  //   id: 1,
  //   img: sign1,
  // };
  // const data2 = {
  //   id: 1,
  //   img: sign2,
  // };

  // const data3 = {
  //   id: 1,
  //   img: sign3,
  // };

  return (
    <div>
      <div className="signIn-container">
        <img src={logo} className="mt-3 ms-4" />
        <div className="register-para"></div>
        <div className="center-container">
          <div className="leftside-container">
            <div className="innerside">
              <h1 className="signin-header">Sign in</h1>

              <p className="signin-number">Mobile Number</p>
              <div className="number-container">
                <p className="default-content">+91</p>
                <input
                  className="input-field-number"
                  type="number"
                  value="6875429132"
                />
              </div>

              <button className="signin-btn" onClick={slideChange}>
                Next
              </button>
            </div>
          </div>
          <div className="rightside-container">
            {/* <Carousel variant="dark" className="carousel-schrol">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data.img}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data2.img}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={data3.img}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel> */}
            <Slideshow slides={SliderData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
