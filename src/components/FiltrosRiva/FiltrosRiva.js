import React, { useState } from "react";
import "./FiltrosRiva.css";

export default function FiltrosRiva({ onFiltroStatus, onFiltroBairro }) {

  const [ativoStatus, setAtivoStatus] = useState(null);
  const [ativoBairro, setAtivoBairro] = useState(null);

  console.log("🔥 FILTROS OK");

  const handleStatus = (valor) => {
    setAtivoStatus(valor);
    onFiltroStatus(valor);
  };

  const handleBairro = (valor) => {
    setAtivoBairro(valor);
    onFiltroBairro(valor);
  };

  const limparFiltros = () => {
    setAtivoStatus(null);
    setAtivoBairro(null);
    onFiltroStatus(null);
    onFiltroBairro(null);
  };

  return (
    <section className="filtros-container">

      <h2>Escolha pelo Momento</h2>

      <button className={ativoStatus === "breve" ? "ativo" : ""} onClick={() => handleStatus("breve")}>Breve Lançamento</button>
      <button className={ativoStatus === "lancamento" ? "ativo" : ""} onClick={() => handleStatus("lancamento")}>Lançamento</button>
      <button className={ativoStatus === "obras" ? "ativo" : ""} onClick={() => handleStatus("obras")}>Em Obras</button>
      <button className={ativoStatus === "avancadas" ? "ativo" : ""} onClick={() => handleStatus("avancadas")}>Obras Avançadas</button>
      <button className={ativoStatus === "pronto" ? "ativo" : ""} onClick={() => handleStatus("pronto")}>Pronto para Morar</button>
      <button className={ativoStatus === "portfolio" ? "ativo" : ""} onClick={() => handleStatus("portfolio")}>Portfólio</button>

      <h2>Busque por Bairro</h2>

      <button className={ativoBairro === "tijuca" ? "ativo" : ""} onClick={() => handleBairro("tijuca")}>Tijuca</button>
      <button className={ativoBairro === "barra" ? "ativo" : ""} onClick={() => handleBairro("barra")}>Barra Olímpica</button>
      <button className={ativoBairro === "camorim" ? "ativo" : ""} onClick={() => handleBairro("camorim")}>Camorim</button>
      <button className={ativoBairro === "nova_iguacu" ? "ativo" : ""} onClick={() => handleBairro("nova_iguacu")}>Centro Nova Iguaçu</button>
      <button className={ativoBairro === "pechincha" ? "ativo" : ""} onClick={() => handleBairro("pechincha")}>Pechincha</button>
      <button className={ativoBairro === "recreio" ? "ativo" : ""} onClick={() => handleBairro("recreio")}>Recreio dos Bandeirantes</button>
      <button className={ativoBairro === "sao_cristovao" ? "ativo" : ""} onClick={() => handleBairro("sao_cristovao")}>São Cristóvão</button>

      <button className="limpar" onClick={limparFiltros}>
        Limpar filtros
      </button>

    </section>
  );
}