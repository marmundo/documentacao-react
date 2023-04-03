import hexToRgba from 'hex-to-rgba'
import Card from '../Card'
import './Time.css'
const Time = ({ time, membros, mudarCor, deletarMembro }) => {
  return (
    membros.length > 0 &&
    <section className="time" style={{ backgroundColor: hexToRgba(time.cor, '0.6') }}>
      <h1>Time {time.nome}</h1>
      <div className='cor'>
        <input type='color' className='input-cor' value={time.cor} onChange={evento => {
          mudarCor(evento.target.value, time.nome);
        }} />
      </div>
      <div className="cards">
        {membros.map((membro, i) => {
          return (
            <Card cor={time.cor} key={i} nome={membro.nome} cargo={membro.cargo} imagem="https://github.com/marmundo.png" deletarMembro={deletarMembro} />
          )
        }
        )}
      </div>
    </section >
  )
}
export default Time