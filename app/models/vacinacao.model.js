module.exports = mongoose => {
    const Vacinacao = mongoose.model(
        "vacinacao",
        mongoose.Schema(
            {
                id_ordem: Number,
                municipio: String,
                area: String,
                populacao_estimada: String,
                densidade_demografica: String,
                escolarizacao_6_14_anos: String,
                idhm: String,
                mortalidade_infantil: String,
                receitas_realizadas: String,
                despesas_empenhadas: String,
                pib: String,
                data_atualizacao: Date,
                dose: String,
                total_doses_aplicadas: String,
                qtd_doses: String
            },
            { timestamps: true , collection: 'vacinacao'}
        )
    );

    return Vacinacao;
};