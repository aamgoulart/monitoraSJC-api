const db = require('../models');
const Doses = db.doses;

async function verifyLastDateUpdate(req, res, next) {
    const { date } = req.query;
    
    if(!date || date == null || date == undefined) {
        let lastDocument = await Doses.findOne().sort({ field: 'asc', data_atualizacao: -1 });
        req.query.date = lastDocument.data_atualizacao;
    }

    next();
}

module.exports = verifyLastDateUpdate;