const express = require("express") // importando o express
const app = express() // iniciando o express e passando para a variavel app
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