module.exports = mongoose => {
    const Covid = mongoose.model(
        "covid",
        mongoose.Schema(
            {
                _Id: Number,
                month: String,
                cases_confirm: Number,
                deaths: Number,
                recovery: Number,     
                total_recieve: Number,
                total_vacined: Number,
                firstDose: Number,
                segundDose: Number,
                singleDose: Number,
                total_applied: Number          
            },
            { timestamps: true , collection: 'covid'}
        )
    );
    return Covid;
};