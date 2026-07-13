import React from "react";
import ImageCard from "./ImageCard";
import empreendimentos from "../Helper/empreendimentos.json";
import "./ImageGrid.css"; // 🔥 FALTAVA ISSO (CRÍTICO)

function ImageGrid({ filtroStatus, filtroBairro }) {

  const filtrados = empreendimentos.filter((item) => {
    const matchStatus = !filtroStatus || item.status === String(filtroStatus);
    const matchBairro = !filtroBairro || item.bairro === String(filtroBairro);

    return matchStatus && matchBairro;
  });

  return (
    <div className="image-grid" key={filtroStatus + filtroBairro}>
      {filtrados.length > 0 ? (
        filtrados.map((item) => (
          <ImageCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", width: "100%" }}>
          Nenhum empreendimento encontrado.
        </p>
      )}
    </div>
  );
}

export default ImageGrid;