import './ListaSuspensa.css'
const ListaSuspensa = (props) => {
  const aoSalvar = (evento)=>{
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={aoSalvar }
        required={props.obrigatorio}
        value={props.valor}>
        <option value=""></option>
        {props.items.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
      </select>
    </div>
  )
}
export default ListaSuspensa