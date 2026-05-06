const express = require("express")
//const path = require("path")

const ProfessorRouter = require('./routes/ProfessorRoutes');
const AlunoRouter = require('./routes/AlunoRoutes')

const app = express()
const port = 3000

app.use("/api/professores", ProfessorRouter)
app.use("/api/alunos", AlunoRouter)

app.use(
    (request, resolve) => {
        resolve.status(404).json({erro:"Rota não encontrada!"})
    }
)

app.listen(
    port,
    () => {
        console.log(`API executando na porta ${port}`)
    }
)