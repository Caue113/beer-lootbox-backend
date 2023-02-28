const express = require("express");
const mysql = require("mysql2");

const app = express();
//Porta de execucao do Server
const port = 3000;      

//Permite com que use JSON para I/O
app.use(express.json())

//Inicia o servidor
app.listen(port, ()=>{
    console.log(`Listening server on port: ${port}`)
});

//Get endpoints
app.get("/", (req, res) =>{
    res.json( {"message": "Hellooo World"});
})

app.get("/bebidas", (req, res) =>{
    


})
