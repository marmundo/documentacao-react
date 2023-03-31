import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [time, setTime] = useState('');

  const limparCampos = () => {
    setNome('')
    setEndereco('')
    setTime('')
  }
  const aoSalvar = (evento) => {
    evento.preventDefault()
    let colaborador={ nome, endereco, time }
   
    props.aoColaboradorCadastrado(colaborador)
    limparCampos()
  }
  return (
    <section className="formulario" onSubmit={aoSalvar}>
      <form>
        <h1> Digite os Dados do Membro da sua Equipe</h1>
        <CampoTexto label="Nome" valor={nome} aoAlterado={nome => { setNome(nome) }} />
        <CampoTexto label="Endereço" valor={endereco} aoAlterado={endereco => { setEndereco(endereco) }} />
        <ListaSuspensa
        obrigatorio={true}
          label="Time"
          items={props.times}
          aoAlterado={(valor) => setTime(valor)}
          valor={time} />
        <Botao>
          Salvar
        </Botao>

      </form>
    </section>
  )
}
export default Formulario