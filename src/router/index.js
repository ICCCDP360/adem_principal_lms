import React from "react";
import { Route, Routes } from "react-router-dom";
// import MainContentPage from "../pages/views/dashboard";
import Signin from "./../pages/auth/signin/Signin";
import Dashboard from "./../pages/views/dashboard/Dashboard";
import MainContentPage from "./../pages/views/index";

function IndexRouters() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/" element={<MainContentPage />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default IndexRouters;
