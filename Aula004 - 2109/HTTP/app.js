// Primeira aplicação HTTP com Node.JS
// Primeiro passo: Criar uma variável chamada http que vai receber o require da biblioteca http:

var http = require('http'); // fazer requisições via biblioteca http

// Nesse caso estamos incorporando a biblioteca http. Em seguida, precisamos criar (subir) 
// um servidor no Node nós vamos utilizar bastante funções como argumentos.

http.createServer(function(requisicao, resposta) { // criação do servidor
// Que receve o método createServer da variável http. Esse método tem como parâmetros: requisicao e resposta.
// A função requisicao vai receber a requisição do cliente (browser)
   resposta.end('<h1>Bem vindo ao nosso site</h1>');
// A função resposta fornece a resposta
}).listen(8181)
// Informamos ao servidos qual é a porta que ele está escutando. No caso utilizamos a porta 8181.
// O método server.listen(8181) informa que estará escutando a porta 8181 (http://localhost:8181/)