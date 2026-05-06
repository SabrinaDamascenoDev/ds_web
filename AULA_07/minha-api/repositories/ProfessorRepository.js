
const ProfessorModel = require('../models/ProfessorModel')

// Acessa a base de dados 
// Simular em memorie
const professores = [
    new ProfessorModel(1, 'Alexandre Matos Arruda', 'https://www.quixada.ufc.br/wp-content/uploads/2026/03/Alexandre-1-e1775493896295-240x363.jpeg'),
    new ProfessorModel(2, 'Alisson Barbosa de Souza', 'https://www.quixada.ufc.br/wp-content/uploads/2016/02/Andr%C3%A9_Ribeiro_Braga1-225x300.png')
]

// Classes são métodos e não funções
class ProfessorRepository {
    // um acesso ao banco de dados é uma promessa, ai a gente coloca aq a promisse p testar
    async listarTodos() {
        return Promise.resolve(professores)
    }

}

module.exports = new ProfessorRepository()