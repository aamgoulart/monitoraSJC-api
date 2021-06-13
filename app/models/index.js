// const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL;
db.vacinacao = require("./vacinacao.model.js")(mongoose);
db.doses = require("./ibge_doses.model.js")(mongoose);
db.cidades = require("./ibge_cidades.model.js")(mongoose);
db.ibgeDosesFull = require("./ibge_novo_com_doses.js")(mongoose);
db.cases = require("./cases.model")(mongoose);
db.vaccination = require("./vaccination.model")(mongoose);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

module.exports = db;
