import Card from '../Card'
import './Time.css'
const Time = ({ time, membros }) => {
  return (
    membros.length > 0 &&
    <section className="time">
      <h1>Time {time}</h1>
      <div className="cards">
        {membros.map((membro, i) => {
          return (
            <Card key={i} nome={membro.nome} cargo={membro.cargo} imagem="https://github.com/marmundo.png" />
          )
        }
        )}
      </div>
    </section>
  )
}
export default Time