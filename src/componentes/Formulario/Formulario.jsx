import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css"

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto className='campo-texto' label="Nome" />
        <CampoTexto className='campo-texto' label="Endereço" />
      </form>
    </section>
  );
};
export default Formulario;