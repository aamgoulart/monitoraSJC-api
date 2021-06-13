module.exports = mongoose => {
    const Doses = mongoose.model(
        "doses",
        mongoose.Schema(
            {
                _Id: Number,
                municipio: String,
                cod_ibge: String,
                data_atualizacao: Date,
                populacao: String,
                dose1: String,
                dose2: String,
                doses_aplicadas: String,
                doses_aplicadas: String,
                doses_aplicadas_por_distribuidas: String,
                pop_vacinada_por_total: String,
                
            },
            { timestamps: true , collection: 'ibge_doses'}
        )
    );
    return Doses;
};