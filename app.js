const express = require('express');
const app = express();

app.get('/categoria', (req, res)=>{
    res.sendFile(__dirname + "/views/categoria.html");
});

app.listen(3000,()=>
console.log("Bem-Vindos a InfoDevs"));