const express = require("express") // importando o express
const app = express() // iniciando o express e passando para a variavel app

app.get("/", function(requisicao, resposta) { // forma mais simples de criar uma rota (locahost:3000)
   resposta.send("Bem Vindo ao Express");
}); // Toda rota criado precisa devolver uma resposta
// Nesse caso em formato de texto. Mas pode ser uma página HTML, um arquivo, etc.

app.get("/blog/:nome", function(requisicao, resposta) { // (locahost:3000/blog)
   // requisicao: são dados enviados pelo usuário
   // resposta: resposta que vai ser enviada para o usuário
   var nome = requisicao.params.nome
   resposta.send(`<h1> Olá ${nome}, como está? </h1>`);
});

app.listen(3000, function(erro) {
   if (erro) {
      console.log('Ocorreu um erro');
   }
   else {
      console.log('Servidor iniciado com sucesso');
   }
});
// inicia o servidor -> $ node index.js 

// Ao acessar o locahost:3000
// Terá o erro: Cannot GET /
// Esse erro acontece pois não existe rota
// Precisa usar rotas