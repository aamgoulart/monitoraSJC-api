var moment = require("moment-timezone");
moment.tz.setDefault("America/Sao_Paulo");

function getLastDay() {
  let currentDay = moment();

  let year = currentDay.year();
  let month = currentDay.month() + 1;
  let day = currentDay.date() - 1;
  let lastDay = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;

  return new Date(lastDay).toISOString();
}

module.exports = getLastDay;
