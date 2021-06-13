module.exports = mongoose => {
    const IbgeDosesFull = mongoose.model(
        "IbgeCidades",
        mongoose.Schema(
            {
                _id: Number,
                municipio: String,
                cod_ibge: String,
                gentilico: String,
                prefeito: String,
                area: String,
                populacao_estimada: String,
                densidade_demografica: String,
                escolarizacao_6_14_anos: String,
                idhm: String,
                mortalidade_infantil: String,
                receitas_realizadas: String,
                despesas_empenhadas: String,
                pib: String,
                latitude: String,
                longitude: String,
                postos: Number,
                hospitais: Number,
                medicos: Number,
             },
            { timestamps: true , collection: 'ibge_novo'}
        )
    );
    return IbgeDosesFull;
};