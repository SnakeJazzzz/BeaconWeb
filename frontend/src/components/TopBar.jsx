import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu whenever location changes (e.g., user clicks a link)
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "Nosotros", path: "/nosotros" },
    { label: "Especialidades", path: "/especialidades" },
    { label: "Gobierno Corporativo", path: "/gobierno-corporativo" },
    { label: "Consejos", path: "/consejos" },
    { label: "Contacto", path: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        color: scrolled ? "#000000" : "#ffffff",
        transition: "all 0.3s ease",
        boxShadow: scrolled
          ? "0 4px 6px rgba(0, 0, 0, 0.1)"
          : "0px 1px 0px rgba(255, 255, 255, 0.2)",
        padding: "10px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Logo + Title */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src={scrolled ? "/LogoBlack.svg" : "/LogoWhite.svg"}
            alt="Beacon Logo"
            style={{ width: "50px" }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "1.5rem",
              color: scrolled ? "#000000" : "#ffffff",
              transition: "color 0.3s ease",
            }}
          >
            Beacon Governance
          </h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="hamburger-icon"
          style={{
            marginLeft: "auto",
            cursor: "pointer",
            fontSize: "1.5rem",
            display: "none", // will override in CSS for small screens
            color: scrolled ? "#000000" : "#ffffff",
            transition: "color 0.3s ease",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776; {/* Unicode hamburger menu icon */}
        </div>

        {/* Nav Links (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "30px",
            marginLeft: "auto",
          }}
        >
          {navItems.map(({ label, path }, i) => (
            <a
              key={i}
              href={path}
              style={{
                textDecoration: "none",
                color: scrolled ? "#000000" : "#ffffff",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "60px",
            right: 0,
            backgroundColor: scrolled ? "#f8f8f8" : "rgba(0,0,0,0.8)",
            color: scrolled ? "#000" : "#fff",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "0 0 0 10px",
            zIndex: 999,
          }}
        >
          {navItems.map(({ label, path }, i) => (
            <div key={i} style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
              <a
                href={path}
                style={{
                  textDecoration: "none",
                  color: scrolled ? "#000" : "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default TopBar;