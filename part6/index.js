
/*const http=require('express')
const app = express()*/

const express = require('express'); // para CommonJS
const app = express();


let notes = [
  {
    "id": 1,
    "content": "Me tengo que suscribir a @midudev en YouTube",
    "date": "2019-05-30T17:30:31.098Z",
    "important": true
  },
  {
    "id": 2,
    "content": "Tengo que estudiar las clases del FullStack Bootcamp",
    "date": "2019-05-30T18:39:34.091Z",
    "important": false
  },
  {
    "id": 3,
    "content": "Repasar los retos de JS de midudev",
    "date": "2019-05-30T19:20:14.298Z",
    "important": true
  }
]


//Cuando se haga una peticion de tipo get//
app.get('/',(request,response)=>{

    response.send('<h1>Hola Nanu</h1>')

})

app.get('/api/notes',(request,response)=>{

    response.json(notes)
})

//En la request siempre va a llegar un string
//Forma dinamica de recuperar un elemento//
app.get('/api/notes/:id',(request,response)=>{

    const id = Number(request.params.id)
    const note = notes.find(note=>note.id === id)
    if(note){
    response.json(note)
    }
    else{
        response.status(404).end()
    }
})
//En caso de que no encuentre la nota me retorna error.


//Delete//
app.delete('/api/notes/:id',(request,response)=>{

    const id= Number(request.params.id) 
    notes = notes.filter(note => note.id !== id) //Se van a guardar todas menos la que estoy borrando
    response.status(204).end()
}
)
///A create server se le pasa un parametro CALLBACK, se va a ejecutar cada 
// vez que llegue una request.///
/*const app = http.createServer((request,response)=>{
 response.writeHead(200, {'Content-Type': 'application/json'})
 response.end(JSON.stringify(notes))//Recupera el array, lo recorre y transforma los datos en string.
})
*/
const PORT = 3001
app.listen(PORT)
console.log('Server corriendo en el puerto ${PORT}')