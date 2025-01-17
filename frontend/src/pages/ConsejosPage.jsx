import React from "react";

const ConsejosPage = () => {
  const consejos = [
    {
      logo: "/LogosCon/1.svg",
      company: "GRUPO ROMA",
      business: "RETAIL DE COMEX Y TRUPER",
      role: "CONSEJERO INDEPENDIENTE"
    },
    {
      logo: "/LogosCon/2.svg",
      company: "GRUPO HABER",
      business: "RETAIL, MEN´S FASHION, ROBERTS, HIGH LIFE, DOROTHY GAYNOR, INDUSTRIAL TEXTIL",
      role: "CONSEJERO INDEPENDIENTE, FAMILLY ADVISOR, Y PROYECTOS ESTRATEGICOS"
    },
    {
      logo: "/LogosCon/3.svg",
      company: "GRUPO ITTOB",
      business: "CONSTRUCCIÓN, INFRAESTRUCTURA, Y REAL ESTATE",
      role: "CONSEJERO INDEPENDIENTE, FAMILY ADVISOR Y PROYECTOS ESTRATÉGICOS"
    },
    {
      logo: "/LogosCon/4.svg",
      company: "GRUPO TRASGO",
      business: "AGRI-BUSINES Y REAL ESTATE",
      role: "CONSEJERO INDEPENDIENTE Y FAMILY ADVISOR"
    },
    {
      logo: "/LogosCon/5.svg",
      company: "GRUPO PALLACH",
      business: "HEALTH CARE",
      role: "CONSEJERO INDEPENDIENTE Y FAMILY ADVISOR"
    },
    {
      logo: "/LogosCon/6.svg",
      company: "INMUEBLES TRES PICOS",
      business: "DESARROLLO INMOBILIARIO - VIVIENDA POPULAR",
      role: "CONSEJERO INDEPENDIENTE"
    },
    {
      logo: "/LogosCon/7.svg",
      company: "WIN-WORLD INGREDIENTS",
      business: "FOOD TECH",
      role: "CONSEJERO INDEPENDIENTE Y PROYECTOS ESTRATÉGICOS"
    },
    {
      logo: "/LogosCon/8.svg",
      company: "AXXIFY",
      business: "RETAIL TECH",
      role: "ADVISOR Y ACCIONISTA"
    },
    {
      logo: "/LogosCon/9.svg",
      company: "FRIOS",
      business: "FOOD TECH",
      role: "CONSEJERO INDEPENDIENTE, FAMILY ADVISOR Y PROYECTOS ESTRATÉGICOS"
    },
    {
      logo: "/LogosCon/10.svg",
      company: "GRUPO PAGANI",
      business: "INDUSTRIAL - INYECCIÓN PLÁSTICA: JUGETES Y LOGISTICA",
      role: "CONSEJERO INDEPENDIENTE Y FAMILY ADVISOR"
    },
    {
      logo: "/LogosCon/11.svg",
      company: "XUNTOS CAPITAL",
      business: "GOBIERNO CORPORATIVO, M&A, SERVICIOS FINANCIEROS",
      role: "SPECIAL ADVIOSR"
    },
    {
      logo: "/LogosCon/12.svg",
      company: "FUNDACIÓN DEVLYN",
      business: "",
      role: "CONSEJO CONSULTIVO"
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1>Consejos</h1>
            <p>Experiencia en Dirección y Consultoría Empresarial</p>
          </div>
        </div>
      </section>

      {/* Consejos Grid Section */}
      <section className="consejos-section">
        <div className="consejos-container">
          <div className="consejos-grid">
            {consejos.map((consejo, index) => (
              <div key={index} className="consejo-card">
                <div className="logo-container">
                  <img src={consejo.logo} alt={consejo.company} />
                </div>
                <div className="consejo-info">
                  <h3>{consejo.company}</h3>
                  {consejo.business && (
                    <p className="business">{consejo.business}</p>
                  )}
                  <div className="divider">—</div>
                  <p className="role">{consejo.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsejosPage;