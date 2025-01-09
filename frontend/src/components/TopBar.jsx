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
    <header>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/Logo.svg"
          alt="Beacon Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <h1 style={{ margin: 0, fontSize: "1.5rem", color: "#000" }}>Beacon Governance</h1>
      </div>

      {/* Navigation Icon */}
      <div>
        <img
          src={location.pathname === "/contact" ? "/HomePageLogo.svg" : "/ContactPageLogo.svg"}
          alt="Navigation Icon"
          style={{ width: "30px", cursor: "pointer" }}
          onClick={handleNavigate}
        />
      </div>
    </header>
  );
};

export default TopBar;