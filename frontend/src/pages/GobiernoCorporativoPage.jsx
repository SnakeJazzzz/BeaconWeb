import React from "react";

const GobiernoCorporativoPage = () => {
  const organizacionCards = [
    {
      title: "Órganos de Gobernanza Familiar",
      points: [
        "Asamblea Familiar",
        "Consejo Familiar",
        "Comites de Apoyo, ej Comité de Next Gen",
        "Family Office"
      ]
    },
    {
      title: "Órganos de Gobernanza Empresarial",
      points: [
        "Asamblea de Accionistas",
        "Consejo de Administración",
        "Comités de apoyo, al menos dos: Comité de Auditoría y Comité de Talento y Compensación",
        "Comité de Consejeros Independientes"
      ]
    },
    {
      title: "Estructura de Management",
      points: [
        "Plan Estratégico y de negocio 3-5 años",
        "Definición de OKRs y KPIs",
        "Estructura organizacional",
        "Sistema formal de Evaluación de Desempeño",
        "Assesment de competencia actuales y competencias requeridas"
      ]
    }
  ];

  const ejecucionCards = [
    {
      title: "Asamblea de Accionistas",
      points: [
        "Integración",
        "Agenda de asuntos de ordinarios y de super-mayoría",
        "Periodicidad de reuniones",
        "Determinación de información a distribuir y responsabilidad de su generación e integridad",
        "Facultamiento de accionistas y canales de comunicación",
        "Mandato de accionistas al Consejo",
        "Reglas de Operación de Consejo y Comités"
      ]
    },
    {
      title: "Consejo de Administración",
      points: [
        "Integración",
        "Agenda de asuntos",
        "Periodicidad de reuniones",
        "Determinación de información a distribuir y responsabilidad de su generación e integridad",
        "Comités de apoyo – Comité de Auditoría, Comité de Talento y Compensación",
        "Definición de políticas y Sistema de Control interno: Sistema de Segregación de Funciones, Tabla de Facultades, Poderes",
        "Plan de negocio 3-5 años y estrategia de negocio",
        "Mapa de riesgos"
      ]
    },
    {
      title: "Documentos requeridos o a desarrollar",
      points: [
        "Manifiesto de acuerdos de accionistas / Protocolo Familiar",
        "Estatutos Sociales y Acuerdo de Accionistas",
        "Reglas de Operación del Consejo de Administración y sus Comités",
        "Family Business Readiness Index"
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1>Alcances de Gobierno Corporativo</h1>
          </div>
        </div>
      </section>

      {/* Organización Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Organización</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="gov-cards">
            {organizacionCards.map((card, index) => (
              <div key={index} className="gov-card">
                <h3>{card.title}</h3>
                <ul>
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejecución Section */}
      <section className="gov-section">
        <div className="gov-container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Ejecución</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="gov-cards">
            {ejecucionCards.map((card, index) => (
              <div key={index} className="gov-card">
                <h3>{card.title}</h3>
                <ul>
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GobiernoCorporativoPage;