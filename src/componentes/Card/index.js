import './Card.css';
const Card = ({nome,endereco,imagem}) => {
  return (
    <div className='card'>
      <div className="cabecalho">
        <img src={imagem} alt='imagem'/>
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{endereco}</h5>
      </div>
    </div>
  )
}
export default Card;