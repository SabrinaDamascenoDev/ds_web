const express = require("express")
const AlunoService = require('../services/AlunoService')

const router = express.Router()


router.get(
    "/",
    async (request, resolve) => {
        const alunos = await AlunoService.listarTodos()
        resolve.json(alunos)
    }
)

module.exports = router