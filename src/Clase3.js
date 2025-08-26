import React, { useState } from "react";


/*1.6: unicafe, paso 1
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría.*/

/*(1.7: unicafe, paso 2
Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: 
el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) 
y el porcentaje de comentarios positivos.

1.8: unicafe, paso 3
Refactoriza tu aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.


*/

const Estadisticas = ({bueno,neutral,mala}) => {
    
        const total = bueno + neutral + mala
        const promedio= total/3
        const porcentaje=(bueno/total)*100
    return (
    <div>
        <p>Total:{total}</p>
        <p>Pomedio:{promedio}</p>
        <p>Porcentaje Comentarios Positivos:{porcentaje}%</p>
    </div>
     )
}

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

      <Estadisticas bueno={bueno} neutral={neutral} mala={mala}/>


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