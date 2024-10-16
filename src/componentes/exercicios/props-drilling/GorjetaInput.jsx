// GorjetaInput.js
import PropTypes from "prop-types";
const GorjetaInput = ({ onGorjetaChange }) => {
  return (
    <div>
      <label htmlFor="gorjetaInput">Porcentagem Gorjeta: </label>
      <input
        id="gorjetaInput"
        type="number"
        onChange={(e) => onGorjetaChange(e.target.value)}
        placeholder="Valor em porcentagem"
      />
    </div>
  );
};
GorjetaInput.propTypes = {
  onGorjetaChange: PropTypes.func.isRequired,
};

export default GorjetaInput;
