
const AlunoModel = require('../models/AlunoModel')

const alunos = [
    new AlunoModel(87263, "Maria Eduarda Spinosa Braga", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauWq1qLCj_LPtRKHG-FuVDHmoAao6roWTZw&s"),
    new AlunoModel(76235, "Francisca Issllany de Sousa Braga", "https://blog.mrhgestao.com.br/wp-content/uploads/2017/10/130215-qual-o-perfil-do-aluno-que-faz-ensino-medio-junto-com-ensino-tecnico-649x433.jpg"),
    new AlunoModel(72365, "Sabrina Rabelo Damasceno", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXTpNbRUCEpImpAFO9KN3ZSJgZ3fY3XIO0Q&s")
]

class AlunoRepository {
    async listarTodos() {
        return Promise.resolve(alunos)
    }
}


module.exports = new AlunoRepository()