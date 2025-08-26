import React from "react";
import ReactDOM from "react-dom/client";
import { useState} from "react";
///Ejemplo de Hoop///


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
let contador = 0;

const App = (props) => {
    const[contador, updateContador] = useState(13)

        return(
        <div>

            <button onClick={() => {console.log ("click")}}> Incrementar
            </button>
        </div>

    )

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