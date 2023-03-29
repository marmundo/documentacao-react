import { useState } from 'react'
import './CampoTexto.css'


const CampoTexto = (props) => {
  const [valor,setValor] = useState()
  
  const aoDigitado=(evento)=>{
    setValor(evento.target.value)
  }
  return (
    <div className="campo-texto">
          <label>{props.label}</label>
          <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
      </div>
  )
}

export default CampoTexto