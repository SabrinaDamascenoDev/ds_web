class ProfessorModel {
    constructor(id, nome, imagem) {
        // Propriedades úteis ao user final
        this.id = id
        this.nome = nome
        this.imagem = imagem

        // Propriedades úteis ao sistema interno
        this.ativo = true
    }
}

module.exports = ProfessorModel

// objeto é uma instância de uma classe