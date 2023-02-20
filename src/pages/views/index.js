import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

function MainContentPage() {
  return (
    <div style={{ display: "flex", width: "100%", backgroundColor: "#F5F5F5" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContentPage;
