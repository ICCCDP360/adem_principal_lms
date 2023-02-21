import React from "react";
import NotificationHeader from "./NotificationHeader";
import NotificationContent from "./NotificationContent";

function Notification() {
  return (
    <div style={{ width: "100%", padding: "1%" }}>
      <NotificationHeader />
      <NotificationContent />
    </div>
  );
}

export default Notification;
