import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulario enviado!");
    // You will later integrate this with the backend API
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src="/assets/banner.jpg" alt="Contact Banner" style={{ width: "100%", height: "300px" }} />
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
        />
        <input
          type="text"
          name="phone"
          placeholder="Número telefónico"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactPage;