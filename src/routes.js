import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Formulario from './componentes/Formulario';
import PaginaPadrao from './componentes/PaginaPadrao';
import Time from './componentes/Time';
function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    { nome: "Marcelo Damasceno", cargo: "Professor", imagem: "https://github.com/marmundo.png", time: times[0].nome }
  ])

  const salvarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function mudarCor(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }
  function deletarMembro(nome) {
    let membros = colaboradores.filter(membro => nome !== membro.nome)
    setColaboradores(membros)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={times.map((time, indice) => {
            return <Time
              key={indice}
              time={time}
              membros={colaboradores.filter(item => item.time === time.nome)}
              mudarCor={mudarCor}
              deletarMembro={deletarMembro}
            />
          })} />
          <Route path="cadastro" element={<Formulario
            times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => salvarColaborador(colaborador)} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
