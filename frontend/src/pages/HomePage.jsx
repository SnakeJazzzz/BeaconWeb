import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Main Banner */}
      <div className="banner-container">
        <img
          src="/BeaconLight.svg"
          alt="Main Banner"
        />
        <div className="banner-text">
          Diseño e Implementación de Gobierno Corporativo<br />
          en Empresas Familiares
        </div>
      </div>

      {/* Info Section */}
      <div style={{ margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", color: "#000", marginBottom: "20px" }}>
          Alcances del Gobierno Corporativo - Organización
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
          {/* Info Box 1 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Órganos de Gobernanza Familiar</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Asamblea Familiar</li>
              <li>Consejo Familiar</li>
              <li>Comités de Apoyo, ej Comité de Next Gen</li>
              <li>Family Office</li>
            </ul>
          </div>

          {/* Info Box 2 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Órganos de Gobernanza Empresarial</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Asamblea de Accionistas</li>
              <li>Consejo de Administración</li>
              <li>
                Comités de apoyo, al menos dos: Comité de Auditoría y Comité de Talento y
                Compensación
              </li>
              <li>Comité de Consejeros Independientes</li>
            </ul>
          </div>

          {/* Info Box 3 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Estructura de Management</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Plan Estratégico y de negocio 3-5 años</li>
              <li>Definición de OKRs y KPIs</li>
              <li>Estructura organizacional</li>
              <li>Sistema formal de Evaluación de Desempeño</li>
              <li>
                Assessment de competencias actuales y competencias requeridas
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div style={{ margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", color: "#000", marginBottom: "20px" }}>
          Alcances del Gobierno Corporativo - Ejecución
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
          {/* Execution Box 1 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Asamblea de Accionistas</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Integración</li>
              <li>Agenda de asuntos ordinarios y de super-mayoría</li>
              <li>Periodicidad de reuniones</li>
              <li>Determinación de información a distribuir y responsabilidad de su generación e integridad</li>
              <li>Facultamiento de accionistas y canales de comunicación</li>
              <li>Mandato de accionistas al Consejo</li>
              <li>Reglas de Operación de Consejo y Comités</li>
            </ul>
          </div>

          {/* Execution Box 2 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Consejo de Administración</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Integración</li>
              <li>Agenda de asuntos</li>
              <li>Periodicidad de reuniones</li>
              <li>
                Determinación de información a distribuir y responsabilidad de su generación e integridad
              </li>
              <li>Comités de apoyo – Comité de Auditoría, Comité de Talento y Compensación</li>
              <li>
                Definición de políticas y Sistema de Control Interno: Sistema de Segregación de Funciones,
                Tabla de Facultades, Poderes
              </li>
              <li>Plan de negocio 3-5 años y estrategia de negocio</li>
              <li>Mapa de riesgos</li>
            </ul>
          </div>

          {/* Execution Box 3 */}
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#f8f8f8",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ color: "#213547" }}>Documentos Requeridos o a Desarrollar</h3>
            <ul style={{ color: "#000", lineHeight: "1.8", marginTop: "10px" }}>
              <li>Manifiesto de acuerdos de accionistas / Protocolo Familiar</li>
              <li>Estatutos Sociales y Acuerdo de Accionistas</li>
              <li>Reglas de Operación del Consejo de Administración y sus Comités</li>
              <li>Family Business Readiness Index</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <h3 style={{ textAlign: "center", margin: "40px 0", color: "#000" }}>Reseñas</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {["Persona 1", "Persona 2", "Persona 3", "Persona 4"].map((person, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h4 style={{ color: "#000" }}>{person}</h4>
            <p style={{ color: "#646464" }}>Descripción de la reseña...</p>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <h3 style={{ textAlign: "center", margin: "40px 0", color: "#000" }}>Clientes</h3>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {[1, 2, 3, 4].map((logo) => (
          <img
            key={logo}
            src="/SportsCar.svg"
            alt={`Client ${logo}`}
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;