import CampoTexto from "../CampoTexto"
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h1> Digite os Dados do Membro da sua Equipe</h1>
        <CampoTexto label="Nome" />
        <CampoTexto label="Endereço" />
      </form>
    </section>
  )
}
export default Formulario