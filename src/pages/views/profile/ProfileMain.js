import React from "react";
import ProfileContent from "./ProfileContent";
// import ProfileHeader from "./profileHeader";
import ProfileHeader from "./ProfileHeader";

function ProfileMain() {
  return (
    <div style={{ padding: "1%", width: "100%", height: "100vh" }}>
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}

export default ProfileMain;
