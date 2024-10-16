import PropTypes from "prop-types";

const ContaInput = ({ onContaChange }) => {
  return (
    <div>
      <label htmlFor="contaInput">Valor Conta: </label>
      <input
        id="contaInput"
        type="number"
        onChange={(e) => onContaChange(e.target.value)}
        placeholder="Valor..."
      />
    </div>
  );
};
ContaInput.propTypes = {
  onContaChange: PropTypes.func.isRequired,
};
export default ContaInput;
