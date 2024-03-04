import BotaoAninhado from "../BotaoAninhado/BotaoAninhado";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times=["A","B", "C"]

  return (
    <section className="formulario">
      <form className="form">
        <CampoTexto className="campo-texto" label="Nome" />
        <CampoTexto className="campo-texto" label="Endereço" />
        <BotaoAninhado>Clique Aqui</BotaoAninhado>
        <ListaSuspensa items={times} />
      </form>
    </section>
  );
};
export default Formulario;
