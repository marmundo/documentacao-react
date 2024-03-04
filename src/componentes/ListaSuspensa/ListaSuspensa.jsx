import PropTypes from 'prop-types';

export default function ListaSuspensa(props) {
    const aoSelecionado = (event) => {
        alert(event.target.value)
    };

    return (
        <select name="select" onChange={aoSelecionado}>
        {props.items.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        )}
        </select>
    )
}

ListaSuspensa.propTypes = {
    items: PropTypes.array.isRequired,
};
