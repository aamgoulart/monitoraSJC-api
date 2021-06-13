const getReceivedDateOrDefaultDate = require("./getReceivedDateOrDefaultDate");

function handleDateParameter(req, res, next) {
    let { date } = req.query;
    let verifiedDate = getReceivedDateOrDefaultDate(date);
    req.query.date = new Date(verifiedDate).toISOString();
    
    next();
}

module.exports = handleDateParameter;