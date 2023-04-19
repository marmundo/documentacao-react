import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [time, setTime] = useState('');
  const [imagem, setImagem] = useState('');

  const limparCampos = () => {
    setNome('')
    setCargo('')
    setTime('')
  }

  const navegar = useNavigate();
  const aoSalvar = (evento) => {
    evento.preventDefault()
    let colaborador = { nome, cargo, time }

    props.aoColaboradorCadastrado(colaborador)
    limparCampos()
    navegar(-1)

  }
  return (
    <section className="formulario" onSubmit={aoSalvar}>
      <form>
        <h1> Digite os Dados do Membro da sua Equipe</h1>
        <CampoTexto label="Nome" valor={nome} aoAlterado={nome => { setNome(nome) }} />
        <CampoTexto label="Cargo" valor={cargo} aoAlterado={cargo => { setCargo(cargo) }} />
        <CampoTexto label="Imagem" valor={imagem} aoAlterado={imagem => { setImagem(imagem) }} placeholder="http://url/imagem.png" />
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