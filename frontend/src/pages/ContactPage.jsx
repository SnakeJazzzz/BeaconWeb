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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      <img
        src="/BeaconLight.svg"
        alt="Contact Banner"
        className="banner"
      />
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "600px", // Ensures a proportional max size
          padding: "20px",
          backgroundColor: "#ffffff", // White background for the form
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#000", textAlign: "center" }}>Contáctanos</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#ffffff", // White input background
            color: "#000000", // Black text color
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#ffffff", // White input background
            color: "#000000", // Black text color
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Número telefónico"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#ffffff", // White input background
            color: "#000000", // Black text color
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#ffffff", // White button
            color: "#000000", // Black text for contrast
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactPage;