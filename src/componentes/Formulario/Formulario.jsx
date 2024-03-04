import { useState } from 'react';
import BotaoAninhado from "../BotaoAninhado/BotaoAninhado";
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoTextoEstado from "../CampoTexto/CampoTextoEstado";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times=["A","B", "C"]

  const [nome, setNome] = useState();


  return (
    <>
    <section className="formulario">
      <form className="form">
        <CampoTextoEstado className="campo-texto" label="Nome" valor={nome} aoAlterado={nome=>setNome(nome)} />
        <CampoTexto className="campo-texto" label="Endereço" />
        <CampoTextoEstado />
        <BotaoAninhado>Clique Aqui</BotaoAninhado>
        <ListaSuspensa items={times} />
      </form>
  
    </section>
    {nome &&(  
    <section className='dados'>
      <p>Nome:{nome}</p>
    </section>)}
    </>
  );
};
export default Formulario;
