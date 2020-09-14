//Configuração do servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks
.configure('src/views', {
    express: server,
    noCache: true,
})

server
// configurar arquicvos estáticos (css, scripts, imagens)
.use(express.static("public"))
//receber os dados de req.body
.use(express.urlencoded({ extended: true }))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)