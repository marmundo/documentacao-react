/*
 * Crie um componente para exibir uma imagem e a legenda desta imagem.
 * O componente deve receber a url da imagem e a legenda da imagem via props.
 * Ao clicar na imagem a imagem deve ser exibida em tamanho maior.
 * Ao tirar o mouse na imagem em tamanho maior a imagem deve ser exibida em tamanho normal.
 */

import { useState } from "react";

import PropTypes from "prop-types";
import styles from "./Imagem.module.css";

const Imagem = ({ url, legenda }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={styles.container}>
      <p className={styles.legenda}>{legenda}</p>
      {isZoomed ? (
        <img
          className={styles.quadro}
          src={url}
          alt={legenda}
          onClick={handleImageClick}
          onMouseLeave={handleImageClick}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img
        className={styles.quadro}

          src={url}
          alt={legenda}
          onClick={handleImageClick}
          style={{ width: "50%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default Imagem;

Imagem.propTypes = {
  url: PropTypes.string.isRequired,
  legenda: PropTypes.string.isRequired,
};
