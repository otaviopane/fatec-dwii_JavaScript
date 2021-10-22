var calculadora = require("./calculadora")
// Fazendo isso eu estou importando o arquivo calculadora.js no arquivo app.js.
// Para utilizar a função está se recebendo em um variável chamada somafuncao

console.log(calculadora.nome)

console.log(calculadora.soma(20, 40))
console.log(calculadora.sub(10, 20))
console.log(calculadora.mult(5, 15))
console.log(calculadora.div(400, 20))

calculadora.nome = 'Calculadora do Prof Claudio'
console.log(calculadora.nome)