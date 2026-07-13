import React, { useState } from "react";
import "./ImageCard.css";

const ImageCard = ({ image, title, description }) => {

  const [imgSrc, setImgSrc] = useState(`/${image}`);

  return (
    <div className="image-card">

      <div className="image-container">

        <img
          src={imgSrc}
          alt={title}
          className="image"

          onError={() => {
            setImgSrc("/images/placeholder.png");
          }}
        />

        <div className="hover-description">
          {description}
        </div>

      </div>

      <div className="image-content">
        <h3>{title}</h3>
      </div>

    </div>
  );
};

export default ImageCard;