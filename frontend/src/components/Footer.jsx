import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src="/LogoWhite.svg" alt="Beacon Logo" />
            <span>Beacon Governance</span>
          </Link>
          <p className="footer-tagline">Asegurando el futuro de tu empresa familiar</p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navegación</h3>
          <nav className="footer-nav">
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/especialidades">Especialidades</Link>
            <Link to="/gobierno-corporativo">Gobierno Corporativo</Link>
            <Link to="/consejos">Consejos</Link>
            <Link to="/contact">Contacto</Link>
          </nav>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Social</h3>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">in</span>
            Linkedin
          </a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contáctenos</h3>
          <div className="contact-info">
            <p>
              <span className="contact-icon">📱</span>
              <a href="tel:+525515796045">+52 (55) 1579 6045</a>
            </p>
            <p>
              <span className="contact-icon">✉️</span>
              <a href="mailto:info@beacongovernance.com">
                info@beacongovernance.com
              </a>
            </p>
            <p>
              <span className="contact-icon">📍</span>
              Av. Paseo de la Reforma 296, Juárez, 06600, CDMX
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2024 Beacon Governance. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Aviso de Privacidad</Link>
            <span className="separator">-</span>
            <a 
              href="https://csustentable.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Developed by Michael Andrew Devlyn Roach
            </a>
          </div>
          <a href="#top" className="scroll-top">Ir arriba ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;