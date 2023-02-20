import React from "react";
import ProfileContent from "./ProfileContent";
// import ProfileHeader from "./profileHeader";
import ProfileHeader from "./ProfileHeader";

function ProfileMain() {
  return (
    <div style={{ width: "100%" }}>
      <ProfileHeader />
      <hr style={{ borderTop: "2px solid #0197c6" }} />
      <ProfileContent />
    </div>
  );
}

export default ProfileMain;
