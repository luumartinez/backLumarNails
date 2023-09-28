



// servicios.forEach((servicio) => {console.log (`En Lumar encontras ${servicio}`)})

// colores.forEach((color) =>{console.log (`El ${color} es un color`)})

// const http = require('http');

// const servidor = http.createServer((req, res)=>{
    //     res.end("hola mundo desde node")
    // })
    
    // const PORT = 3000;
    
    // servidor.listen (PORT, ()=>{
        //     console.log(`servidor en marcha en el puerto ${PORT}`)
        // });
        


const express = require("express");
const app = express();
const connectDb = require('./db/mongodb')
const cors = require('cors')
require('dotenv').config()
const comprobacionJwt = require('./middleware/comprobacionJwt')

const PORT= process.env.PORT || 3000;

app.use(express.json()); //recibir objetos en formaton json
app.use(express.urlencoded({ extended : true})); // recibir paramentros y queris en las rutas
app.use(cors())

const initApp = async () =>{
    try {
        app.listen(PORT, () =>{
            console.log(`servidor puesto en marcha en el puerto ${PORT}`)
        });
       await connectDb();
        
    } catch (error) {
        console.log("no se pudo conectar")
    }
};

initApp();

// app.get("/", (req, res) =>{
//     res.send("Hola mundo desde express")
// });

app.use('/api', require('./rutas/RutasServicios'));
app.use('/api/usuarios', require('./rutas/RutasUsuarios'));
app.use('/privada', comprobacionJwt, require("./rutas/RutasAdmin"));
app.use('/api/turnos', require("./rutas/RutasTurnos"));