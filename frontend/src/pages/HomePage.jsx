import React from "react";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#000" }}>
      {/* Main Banner */}
      <img src="/BeaconLight.svg" alt="Main Banner" style={{ width: "100%", height: "500px" }} />

      {/* Info Section */}
      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
        <div>
          <img src="/DadSonDaughter.svg" alt="Info 1" style={{ width: "200px" }} />
          <p>Información sobre el servicio 1.</p>
        </div>
        <div>
          <img src="/Piramide.svg" alt="Info 2" style={{ width: "200px" }} />
          <p>Información sobre el servicio 2.</p>
        </div>
      </div>

      {/* Reviews Section */}
      <h3>Reseñas</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {["Persona 1", "Persona 2", "Persona 3", "Persona 4"].map((person, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px", textAlign: "center" }}>
            <h4>{person}</h4>
            <p>Descripción de la reseña...</p>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <h3>Clientes</h3>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {[1, 2, 3, 4].map((logo) => (
          <img
            key={logo}
            src="/SportsCar.svg" /* Same image for simplicity */
            alt={`Client ${logo}`}
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;