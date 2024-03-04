import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './componentes/Banner/Banner.jsx'
import CampoTexto from './componentes/CampoTexto/CampoTexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Banner/>
   <CampoTexto label='Nome'/>
   <CampoTexto label='Endereço'/>
  </React.StrictMode>,
)
