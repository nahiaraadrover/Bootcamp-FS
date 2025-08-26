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


  const esPar = contador % 2 === 0
  return (
    <div>
      <h1>{contador}</h1>
      <p>{esPar? 'Es Par':'Es Impar'}</p>
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