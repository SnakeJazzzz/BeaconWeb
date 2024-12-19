import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (location.pathname === "/contact") {
      navigate("/");
    } else {
      navigate("/contact");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#f5f5f5" }}>
      {/* Logo on the Left */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/Logo.svg" /* Path to the public folder image */
          alt="Beacon Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0, fontSize: "1.5rem", color: "#000" }}>Beacon Governance</h1>
      </div>

      {/* Icon on the Right */}
      <div>
        <img
          src={location.pathname === "/contact" ? "/HomePageLogo.svg" : "/ContactPageLogo.svg"} /* Path to icons */
          alt="Navigation Icon"
          style={{ width: "30px", cursor: "pointer" }}
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default TopBar;