module.exports = mongoose => {
    const Cases = mongoose.model(
        "cases",
        mongoose.Schema(
            {
                _Id: Number,
                date: Date,
                cases_confirm: Number,
                cases_suspect: Number,
                deaths_suspect: Number,
                deaths: Number,
                recovery: Number,               
            },
            { timestamps: true , collection: 'cases'}
        )
    );
    return Cases;
};