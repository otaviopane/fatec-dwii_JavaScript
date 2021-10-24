const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render("../views/home")
});

app.get('/tabelas', function(req, res) {
   res.render("../views/tabelas")
});

app.listen(3000, function () {
   console.log('Servidor iniciado com sucesso');
});