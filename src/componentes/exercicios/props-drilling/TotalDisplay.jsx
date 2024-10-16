// TotalDisplay.js
import PropTypes from "prop-types";
const TotalDisplay = ({ conta, gorjetaPercentage }) => {
  const gorjetaAmount = (conta * gorjetaPercentage) / 100;
  const total = conta + gorjetaAmount;

  return (
    <div>
      <h3>Conta</h3>
      <p>Gorjeta: R$ {gorjetaAmount.toFixed(2)}</p>
      <p>Total: R$ {total.toFixed(2)}</p>
    </div>
  );
};
TotalDisplay.propTypes = {
  conta: PropTypes.number.isRequired,
  gorjetaPercentage: PropTypes.number.isRequired,
};
export default TotalDisplay;
