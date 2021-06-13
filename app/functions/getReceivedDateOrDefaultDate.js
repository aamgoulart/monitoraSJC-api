const validateDate = require('./validateDate');
const getLastDay = require('./getLastDay');

function getReceivedDateOrDefaultDate(date) {
    return validateDate(date) || getLastDay();
}

module.exports = getReceivedDateOrDefaultDate;