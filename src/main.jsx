import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './componentes/Banner/Banner.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'
import Imagem from './componentes/exercicios/Imagem/Imagem.jsx'
import GeradorDeCoresHex from './componentes/exercicios/GeradorDeCoresHex/GeradorDeCoresHex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Banner/>
   <Formulario/>
   <Imagem url="https://placehold.co/200x200" legenda="Legenda" />
   <GeradorDeCoresHex/>
  </React.StrictMode>,
)
