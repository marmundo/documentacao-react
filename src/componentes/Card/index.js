import './Card.css';
const Card = ({nome,endereco,imagem}) => {
  return (
    <div className='card'>
      <div className="cabecalho">
        <img src={imagem} alt='imagem'/>
      </div>
      <div className='rodape'>
        <p id='nome'>{nome}</p>
        <p id='endereco'>{endereco}</p>
      </div>
    </div>
  )
}
export default Card;