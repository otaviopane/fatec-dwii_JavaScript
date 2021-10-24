// arquivo para inicialização do banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('venda', 'postgres', '123456', { // Banco de dados, usuário, senha
   host: 'localhost',
   dialect: 'postgres',
   port: 5432
});

/* 
sequelize.authenticate().then(function(){
   console.log('Conectado com sucesso!')
}).catch(function(erro){
   console.log('falha ao se conectar:' + erro)
});
*/

// criar nosso modelo(tabela) de produto
const Produto = sequelize.define('produtos', {
   nome: {
      type: Sequelize.STRING
   },
   preco: {
      type: Sequelize.DECIMAL
   },
   descricao: {
      type: Sequelize.STRING
   },
});

const Usuario = sequelize.define('usuarios', {
   nome: {
      type: Sequelize.STRING
   },
   sobrenome: {
      type: Sequelize.STRING
   },
   idade: {
      type: Sequelize.INTEGER
   },
   email: {
      type: Sequelize.STRING
   },
});

Produto.sync({force:true})
Usuario.sync({force:true})


//insert na tabel a Produto
Produto.create({
   nome:'Teclado USB',
   preco: 30,
   descricao: 'Teclado bacana',
});