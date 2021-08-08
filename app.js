const express = require('express');
const app = express();
app.listen(3000, () => {console.log("Bem-vindos a InfoDevs")});
app.set('view engine', 'ejs');
app.use(express.static('public'));

//rotas

app.get('/categoria', (req, res)=>{
    res.sendFile(__dirname + "/src/views/categoria.html");
});
app.get('/conectores', (req, res) => {
    res.sendFile(__dirname + "/src/views/conectores.html");
});
app.get('/smartphone', (req, res) => {
    res.sendFile(__dirname + "/src/views/smartphone.html");
});
app.get('/computador', (req, res) => {
    res.sendFile(__dirname + "/src/views/computador.html");
});
app.get('/impressora', (req, res) => {
    res.sendFile(__dirname + "/src/views/impressora.html");
});
app.get('/monitor', (req, res) => {
    res.sendFile(__dirname + "/src/views/monitor.html");
});