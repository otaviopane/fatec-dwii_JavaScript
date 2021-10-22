var nome = 'Minha calculadora'

function soma(a,b) {
   return a + b
}

function mult(a, b) {
   return a * b
}

function sub(a, b) {
   return a - b
}

function div(a, b) {
   return a / b
}


module.exports = {
   soma,
   mult,
   sub,
   div,
   nome,
};
//  Para conseguir utilizar qualquer coisa que tenha no arquivo calculadora, será necessário exportar. 
//  Nesse caso a função soma, mult, sub e div. Assim disponibilizando essas funções para acesso em outros arquivos.