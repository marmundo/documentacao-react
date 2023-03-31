import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
  const times = ["A", "B", "C"]

  const [colaboradores, setColaboradores] = useState([])

  const salvarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoColaboradorCadastrado={colaborador => salvarColaborador(colaborador)} />
      {times.map(time => {
        let colaboradoresPorTime = colaboradores.filter(item => item.time === time)
        return < Time key={time} time={time} membros={colaboradoresPorTime} />
      }
      )}
      <Rodape/>
    </div>
  )
}

export default App;
