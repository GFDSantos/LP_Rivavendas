import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer/Footer";
import ImageGrid from "./ImageGrid/ImageGrid";
import FiltrosRiva from "./FiltrosRiva/FiltrosRiva";
import "./conheca.css";

function Home() {
  const [filtroStatus, setFiltroStatus] = useState(null);
  const [filtroBairro, setFiltroBairro] = useState(null);

  const location = useLocation();

  // 🔥 ESSA LINHA RESOLVE SEU PROBLEMA
  useEffect(() => {
    setFiltroStatus(null);
    setFiltroBairro(null);
  }, [location.pathname]);

  return (
    <div className="conheca-section">
      <div className="layout-container">

        <aside className="sidebar">
          <FiltrosRiva
            onFiltroStatus={setFiltroStatus}
            onFiltroBairro={setFiltroBairro}
          />
        </aside>

        <main className="conteudo">
          <ImageGrid
            filtroStatus={filtroStatus}
            filtroBairro={filtroBairro}
          />
        </main>

      </div>

      <Footer />
    </div>
  );
}

export default Home;