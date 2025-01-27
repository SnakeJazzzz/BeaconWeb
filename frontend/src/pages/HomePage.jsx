import React from "react";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1>
              Cuando decides que en tu negocio participe tu
              familia, ya sea en la operación o como accionista, es cuando te
              conviertes en una Empresa Familiar.
            </h1>
            <p>
              En las Empresas Familiares le agregas un
              elemento más al éxito de tu negocio: el saber
              planear, comunicar e implementar la transición
              generacional.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="info-cards">
        {[
          `Transición de generaciones
de Ownership y de
Management.`,
          `Implementación del Family
Business Readiness Index© y
modelo do -lead to do- let do.`,
          `Equilibrios de toma de
decisión y beneficios entre
familiares-accionistas-
directivos y no directivos.`,
          `Entrada y salida de familiares
del negocio como accionistas
o ejecutivos.`,
        ].map((text, index) => (
          <div key={index} className="info-card">
            <p>{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;