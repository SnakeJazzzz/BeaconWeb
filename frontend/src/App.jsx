
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NosotrosPage from "./pages/NosotrosPage";
import EspecialidadesPage from "./pages/EspecialidadesPage";
import GobiernoCorporativoPage from "./pages/GobiernoCorporativoPage";
import ConsejosPage from "./pages/ConsejosPage";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <TopBar />
        <main style={{ flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/especialidades" element={<EspecialidadesPage />} />
            <Route path="/gobierno-corporativo" element={<GobiernoCorporativoPage />} />
            <Route path="/consejos" element={<ConsejosPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;