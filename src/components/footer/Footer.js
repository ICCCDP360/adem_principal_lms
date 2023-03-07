import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#00000000",
        textAlign: "end",
        padding: "1%",
        paddingBottom: "1%",
        fontSize: "13px",
        fontWeight: "600",
        color: "gray",
      }}
    >
      <a
        style={{ color: "gray" }}
        href="https://cdp360.com/"
        target={"_blank"}
        rel="noreferrer"
      >
        Powered by CDP360 Technologies Pvt Ltd
      </a>
    </div>
  );
}

export default Footer;
