import PropTypes from 'prop-types';

const CampoTextoEstado = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    );
};

CampoTextoEstado.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    obrigatorio: PropTypes.bool.isRequired,
    aoAlterado: PropTypes.func.isRequired,
};
export default CampoTextoEstado;
