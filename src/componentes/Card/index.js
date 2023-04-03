import './Card.css';
const Card = ({ nome, cor, cargo, imagem, }) => {
  return (
    <div className='card'>
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={imagem} alt='imagem' />
      </div>
      <div className='rodape'>
        <p id='nome'>{nome}</p>
        <p id='cargo'>{cargo}</p>
      </div>
    </div>
  )
}
export default Card;