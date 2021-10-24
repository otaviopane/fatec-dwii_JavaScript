const express = require("express") // importando o Express
const app = express() // iniciando o express e passando para a variavel app
app.listen(3000, () => console.log('Servidor iniciado com sucesso'))

// A variavel dirname vai pegar o caminho que está a pasta "express" e vai concatenar com mais o caminho do meu html.
app.get("/", (requisicao, resposta) => resposta.sendFile(__dirname + "/Aula006 - 1910/html/index.html"))
app.get("/blog", (requisicao, resposta) => resposta.sendFile(__dirname + "/Aula006 - 1910/html/blog.html"))