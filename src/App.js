import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
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
      {times.map((time) => {
        let colaboradoresPorTime=colaboradores.filter(item=>item.time===time)
        if(colaboradoresPorTime.length>0)
          return < Time key={time} time={time} membros={colaboradoresPorTime} />
      }
      )}
    </div>
  )
}

export default App;
