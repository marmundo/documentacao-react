/*
 * Crie um componente que exiba uma cor e seu código em hexadecimal.
 * O componente deve ter um botão para gerar a cor randomicamente e um botão para copiar o código da cor.
 * O componente deve ter um input para visualizar a cor em hexadecimal.
 * O componente deve ter um input para visualizar a cor em hexadecimal.
 */
import { useState } from "react";

import styles from "./GeradorDeCoresHex.module.css";

function GeradorDeCoresHex() {
  const [cor, setCor] = useState("#FFFFFF");

  const gerarCorRandomica = () => {
    const corRandomica =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setCor(corRandomica);
  };

  const copiarCor = () => {
    navigator.clipboard.writeText(cor);
  };

  return (
    <div className={styles.container}>
   
      <div className={styles.controles}>
        <button className={styles.flexItem} onClick={gerarCorRandomica}>Gerar Cor</button>
        <button className={styles.flexItem} onClick={copiarCor}>Copiar Cor</button>
        <input className={styles.flexItem} type="text" value={cor} readOnly />
      </div>
      <div className={`${styles.cor} ${styles.container}` }
        style={{ backgroundColor: cor }}
      > HEX: {cor}</div>
    </div>
  );
}

export default GeradorDeCoresHex;
