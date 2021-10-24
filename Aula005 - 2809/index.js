// Carregamento automático
// Toda vez que fazemos uma modificação no nosso projeto nós tínhamos que interromper o nosso servidor e
// iniciar novamente. Isso em uma aplicação real não acontece.
// Para resolver esse problema precisamos de um módulo do Node chamado Nodemon.
// O Nodemon é um módulo responsável por iniciar o seu servidor, 
// reiniciar a sua aplicação sempre que detectar modificação.
// Para instalar: npm install nodemon -g (-g significa que você quer instalar globalmente no seu computador)

// Para instalar o da biblioteca do PostgreSQL: $ npm install pg
const {Client} = require('pg')

const client = new Client({
   host: "localhost",
   user: "system",
   port: 5432,
   password: "FATEC",
   database: "venda",
});

// maneira rápida e simples de criar uma conexão com o banco
client.connect(); // abrir uma conexão com o banco

client.query('select * from cliente', (err, res) => { // executa a query SQL
   if (!err){
      console.table(res.rows); // joga as linhas do resultado na constante res e exibe
   }
   else {
      console.log(err.message)
   };
   client.end;
});