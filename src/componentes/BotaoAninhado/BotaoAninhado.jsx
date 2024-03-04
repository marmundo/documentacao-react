import PropTypes from 'prop-types';

const BotaoAninhado = (props) => {
    return <button>{props.children}</button>;
};

BotaoAninhado.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BotaoAninhado;
