const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/categoria', (req, res)=>{
    res.sendFile(__dirname + "/views/categoria.html");
});
app.get('/conectores', (req, res) => {
    res.sendFile(__dirname + "/views/conectores.html");
});
app.get('/smartphone', (req, res) => {
    res.sendFile(__dirname + "/views/smartphone.html");
});
app.get('/computador', (req, res) => {
    res.sendFile(__dirname + "/views/computador.html");
});
app.get('/impressora', (req, res) => {
    res.sendFile(__dirname + "/views/impressora.html");
});
app.get('/monitor', (req, res) => {
    res.sendFile(__dirname + "/views/monitor.html");
});

app.listen(3000, () => console.log("Bem-vindos a InfoDevs"));
