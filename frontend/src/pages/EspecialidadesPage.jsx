import React from "react";

const EspecialidadesPage = () => {
  const specialties = [
    "Empresas Familiares y Gobierno Corporativo",
    "Estrategias de Retail y Proyectos Omnicanal",
    "Estrategia Empresarial y Emprendimiento",
    "Coordinación de Procesos en Transacciones Estratégicas"
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1>Especialidades</h1>
            <p>Nuestras áreas de expertise</p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="specialties-container">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <h3>{specialty}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EspecialidadesPage;