import './Card.css';
const Card = (props) => {
  return (
    <div className='card'>
      <div className="cabecalho">
        <img src={props.imagem} alt='imagem'/>
      </div>
      <div className='rodape'>
        <h4>{props.nome}</h4>
        <h5>{props.endereco}</h5>
      </div>
    </div>
  )
}
export default Card;