// import { useState } from "react";
// import Banner from "./componentes/Banner/Banner.jsx";
// import Formulario from "./componentes/Formulario/Formulario.jsx";
// import Imagem from "./componentes/exercicios/Imagem/Imagem.jsx";
// import GeradorDeCoresHex from "./componentes/exercicios/GeradorDeCoresHex/GeradorDeCoresHex.jsx";
// import Todo from "./componentes/exercicios/TODO/Todo.jsx";
import StateHook from "./componentes/exercicios/hooks/StateHook/StateHook.jsx";

function App() {
  //   const [cor, setCor] = useState("#FFFFFF");
  return (
    // <div style={{ backgroundColor: `${cor}` }}>
    <div>
      {/* <Banner /> */}
      {/* <Formulario /> */}
      {/* <Imagem url="https://placehold.co/200x200" legenda="Legenda" /> */}
      {/* <GeradorDeCoresHex cor={cor} aoAlterado={(cor) => setCor(cor)} /> */}
      {/* <GeradorDeCoresHex /> */}
      {/* <Todo /> */}
      <StateHook />
    </div>
  );
}

export default App;
