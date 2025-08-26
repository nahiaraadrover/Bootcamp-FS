import React, { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0); // inicializamos en 0

  //Extraccion de funcion//
  const HandleClick=()=> {
        setContador(contador + 1)

  }

  const ResetearClick=()=>{
    setContador(0)
  }
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={HandleClick}>Incrementar</button>
      <button onClick={ResetearClick}>Resetear</button>
    </div>
  );
};

export default App;


/*
const refresh = () => {
  root.render(<App contadorInicial={contador} />);
}
setInterval(() => {
  contador++
  refresh()
},1000)
export default App;*/