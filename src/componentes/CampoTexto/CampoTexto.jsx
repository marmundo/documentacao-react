import PropTypes from "prop-types";
import "./CampoTexto.css";
import { useState } from "react";

const CampoTexto = (props) => {
  const [valor, setValor] = useState();

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={valor}
        placeholder={props.placeholder}
      />
    </div>
  );
};

CampoTexto.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default CampoTexto;
