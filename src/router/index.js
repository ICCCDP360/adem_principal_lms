import React from "react";
import { Route, Routes } from "react-router-dom";
import Loginotp from "../pages/auth/signin/Loginotp";
import Setpassword from "../pages/auth/signin/Setpassword";
// import MainContentPage from "../pages/views/dashboard";
import Signin from "./../pages/auth/signin/Signin";
import Dashboard from "./../pages/views/dashboard/Dashboard";
import MainContentPage from "./../pages/views/index";
import InstructorMainPage from "./../pages/views/Instructors/InstructorMainPage";
import Forgotpassword from "./../pages/auth/signin/Forgotpassword";

function IndexRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login_otp" element={<Loginotp />} />
        <Route path="/set_password" element={<Setpassword />} />
        <Route path="/forgot_password" element={<Forgotpassword />} />
        <Route path="/" element={<MainContentPage />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructor" element={<InstructorMainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default IndexRouters;
