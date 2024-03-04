import BotaoAninhado from "../BotaoAninhado/BotaoAninhado";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto className="campo-texto" label="Nome" />
        <CampoTexto className="campo-texto" label="Endereço" />
        <BotaoAninhado>Clique Aqui</BotaoAninhado>
      </form>
    </section>
  );
};
export default Formulario;
