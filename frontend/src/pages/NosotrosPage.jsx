import React from "react";

const NosotrosPage = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="text-container">
            <h1></h1> {/* Tilte */}
            <p></p> {/* subtiltle */}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="bio-container">
          <div className="bio-image-container">
            <img 
              src="/MichaelDevlynFoto.svg" 
              alt="Michael Devlyn"
              className="bio-image"
            />
          </div>
          <div className="bio-content">
            <div className="bio-text">
              <p className="bio-name">Michael Devlyn</p>
              <div className="bio-paragraphs">
                <p>
                  Es abogado egresado de la Escuela Libre de Derecho y cuenta con un MBA de IMD, 
                  en Lausanne Suiza y cursos de actualización en management por parte del mismo IMD, 
                  Harvard Business School, Kellog School y UCAL, Berkely. Actualmente es accionista de 
                  <strong> Inversiones DNG (Devlyn Next Gen)</strong> y <strong>Devlyn Holdings</strong> de 
                  la que fue CEO por 5 años hasta Octubre de 2019 y VP de Retail desde 2004 a 2014. 
                  Es además consejero independiente de negocios familiares como Grupo Roma 
                  (Distribuidor-retail de Comex y Trupper), Grupo Pagani, Grupo Haber, Grupo ITTOB, 
                  Grupo TRASGO, Grupo Pallach e Inmuebles Tres Picos, y miembro de Consejos Consultivos 
                  en WIN- World Ingredients, Axxify, y de la Fundación Devlyn.
                </p>
                <p>
                  En su práctica profesional actual, también participa como Asesor Especializado 
                  para distintos proyectos y emprendimientos apoyando a fundadores, socios y CEOs 
                  en transiciones familiares, institucionalización y gobierno corporativo, planeación 
                  estratégica, corporate venturing y transacciones coyunturales como fusiones y 
                  adquisiciones, private equity, joint ventures y la identificación y desinversión 
                  de activos no estratégicos.
                </p>
                <p>
                  Nacido en Chihuahua, Chih en 1967, Michael es casado desde 1993, padre orgulloso 
                  de 2 hijos y apasionado de los deportes e imparte cursos de Planeación Estratégica 
                  a nivel de maestría en la Universidad Panaméricana y en la EGADE del ITESM, así 
                  como speaker en foros de empresas familiares nacionales e internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;