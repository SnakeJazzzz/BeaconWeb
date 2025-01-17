import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado!");
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte con tus necesidades empresariales</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="content-section contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info-card">
            <h2>Información de Contacto</h2>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Av. Paseo de la Reforma 296, Juárez, 06600, CDMX</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+52 (55) 1579 6045</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p>info@beacongovernance.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Número telefónico"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensaje"
                className="form-input"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;