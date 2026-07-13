import React from "react";
import "./conheca.css";
import { useNavigate } from "react-router-dom";

export default function Conheca() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    // 🔥 força navegação limpa + recarregamento da HOME
    navigate("/", { replace: true });

    // 🔥 garante scroll no topo
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <section className="conheca-section">

      {/* HERO */}
      <div className="conheca-hero">
        <h1>Construtora Riva</h1>
        <p>
          Empreendimentos modernos, acessíveis e pensados para transformar vidas.
        </p>
      </div>

      {/* CONTEÚDO */}
      <div className="conheca-container">

        <div className="bloco">
          <h2>Quem é a Riva</h2>
          <p>
            A Riva Incorporadora faz parte do Grupo Direcional, uma das maiores
            construtoras do Brasil, com mais de 40 anos de experiência no mercado
            imobiliário. Seu foco é democratizar o acesso à moradia de qualidade.
          </p>
        </div>

        <div className="bloco">
          <h2>Presença e Atuação</h2>
          <p>
            Com atuação em diversas regiões do país, a Riva desenvolve projetos
            estrategicamente localizados, com foco em mobilidade, infraestrutura
            urbana e valorização imobiliária.
          </p>
        </div>

        <div className="bloco">
          <h2>Diferenciais</h2>
          <ul>
            <li>Localizações estratégicas</li>
            <li>Plantas inteligentes</li>
            <li>Qualidade construtiva</li>
            <li>Processos digitais</li>
            <li>Excelente custo-benefício</li>
          </ul>
        </div>

        <div className="bloco destaque">
          <p>
            Mais do que construir imóveis, a Riva entrega oportunidades reais de
            crescimento, segurança e qualidade de vida.
          </p>
        </div>

        {/* CTA */}
        <div className="cta">
          <button onClick={handleVoltar}>
            Ver empreendimentos
          </button>
        </div>

      </div>
    </section>
  );
}