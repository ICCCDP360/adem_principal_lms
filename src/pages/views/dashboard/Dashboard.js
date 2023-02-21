import React from "react";
import DashboardContent from "./DashboardContent";
import DashboardHeader from "./DashboardHeader";

function Dashboard() {
  return (
    <div style={{ padding: "1%", width: "100%" }}>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
