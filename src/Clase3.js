import React, { useState } from "react";


/*1.6: unicafe, paso 1
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría.*/

const App = () => {
  const [contador, setContador] = useState(0); // inicializamos en 0
  const [bueno, incrementarBueno] = useState(0);
  const [neutral, incrementarNeutral] = useState(0);
  const [mala, incrementarMala] = useState(0);

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
    
    <p>    
    <h1>Que opinas de esta nanu pagina?</h1>
      <button onClick={()=>incrementarBueno(bueno+1)}>Buena</button>
      <button onClick={()=>incrementarNeutral(neutral+1)}>Neutral</button>
      <button onClick={()=>incrementarMala(mala+1)}>Mala</button>
    </p>


      <h2>Estadisticas de tu nanu pagina</h2>
      <p>Buenas:{bueno}</p>
      <p>Neutras:{neutral}</p>
      <p>Malas:{mala}</p>
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