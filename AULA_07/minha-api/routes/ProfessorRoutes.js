const express = require("express")
const ProfessorService = require('../services/ProfessorService')

const router = express.Router()

router.get(
    "/",
    async (request, resolve) => {
        const professores = await ProfessorService.listarTodos()
        resolve.json(professores)
    }
)

module.exports = router