module.exports = mongoose => {
    const Vaccination = mongoose.model(
        "vaccination",
        mongoose.Schema(
            {
                _Id: Number,
                date: Date,
                total_recieve: Number,
                total_vacined: Number,
                firstDose: Number,
                segundDose: Number,
            },
            { timestamps: true , collection: 'vaccination'}
        )
    );
    return Vaccination;
};