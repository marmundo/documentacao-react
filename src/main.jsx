import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './componentes/Banner/Banner.jsx'
import Formulario from './componentes/Formulario/Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Banner/>
   <Formulario/>
  </React.StrictMode>,
)
