import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('Marcelo');
  const [endereco, setEndereco] = useState('Endereço');
  const [time, setTime] = useState('[A]');

  
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({nome,endereco,time})
  }
  return (
    <section className="formulario" onSubmit={aoSalvar}>
      <form>
        <h1> Digite os Dados do Membro da sua Equipe</h1>
        <CampoTexto label="Nome" valor={nome} aoAlterado={nome => { setNome(nome) }} />
        <CampoTexto label="Endereço" valor={endereco} aoAlterado={endereco => { setEndereco(endereco) }} />
        <ListaSuspensa label="Time" items={props.times} aoAlterado={(time)=>setTime(time)}/>
        <Botao>
          Salvar
        </Botao>

      </form>
    </section>
  )
}
export default Formulario