const express = require("express") // importando o express
const app = express() // iniciando o express e passando para a variavel app

app.get("/", function(requisicao, resposta) { // forma mais simples de criar uma rota
   resposta.send("Bem Vindo ao Express");
}); // Toda rota criado precisa devolver uma resposta
// Nesse caso em formato de texto. Mas pode ser uma página HTML, um arquivo, etc.

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