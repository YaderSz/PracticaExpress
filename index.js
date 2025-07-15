import express from 'express';
import {PORT} from './config.js'
import { UserRepository } from './user-repository.js';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Datos Obtenidos</h1>')
}) 

app.listen(PORT, () =>{
    console.log('Servidor corriendo en ', PORT)
})


app.post('/login', (req, res) =>{
    res.send({user: 'miudev'})
})

app.post('/register', (req,res) =>{
    const {username, password} = req.body
    console.log({username, password});
    console.log(req.body);
    try{
        const id = UserRepository.create({username, password})
        res.send({id})
    }catch(error){
        res.status(400).send(error.message);
    }


})

app.post('/logut', (req, res)=>{

})

app.get('protected', (req, res)=>{

})