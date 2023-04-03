import { AiFillCloseCircle } from 'react-icons/ai';
import './Card.css';
const Card = ({ nome, cor, cargo, imagem, deletarMembro }) => {
  return (
    <div className='card'>
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <div className='close'>
          <AiFillCloseCircle className='close' onClick={() => deletarMembro(nome)} />
        </div>
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