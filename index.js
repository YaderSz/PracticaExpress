import express from 'express';
import {PORT} from './config.js'

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Datos Obtenidos</h1>')
}) 

app.listen(PORT, () =>{
    console.log('Servidor corriendo en ', PORT)
})