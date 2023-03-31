import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
  const aoSelecionado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select name="select" onChange={aoSelecionado}>
        {props.items.map((item) =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    </div>
  )
}
export default ListaSuspensa