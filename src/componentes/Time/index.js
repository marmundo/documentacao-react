import Card from '../Card'
import './Time.css'
const Time = (props) => {
  return (
    <section className="time">
      <h1>Time {props.time}</h1>
      <div className="cards">
        {props.membros.map((membro, i) => {
          return (
            <Card key={i} nome={membro.nome} endereco={membro.endereco} imagem="https://github.com/marmundo.png"/>
          )
        }
        )}
      </div>
    </section>
  )
}
export default Time