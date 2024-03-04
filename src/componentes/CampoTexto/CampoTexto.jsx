import PropTypes from 'prop-types';
import './CampoTexto.css';
const CampoTexto = (props) => {
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={props.placeholder} />
            </div>
        );
    };

CampoTexto.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
export default CampoTexto;

