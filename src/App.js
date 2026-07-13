import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import Conheca from "./components/Conheca";
import Faleconosco from "./components/Faleconosco";
import Form from "./components/Form";

function App() {
  return (
    <Router>

      {/* HEADER GLOBAL */}
      <Header />

      {/* ROTAS */}
      <Routes>

        {/* 🔥 HOME REDIRECIONA PARA CONHEÇA */}
        <Route path="/" element={<Home />} />

        {/* CATÁLOGO */}
        <Route path="/conheca" element={<Conheca />} />

        {/* OUTRAS PÁGINAS */}
        <Route path="/fale-conosco" element={<Faleconosco />} />
        <Route path="/contact" element={<Form />} />

      </Routes>

    </Router>
  );
}

export default App;