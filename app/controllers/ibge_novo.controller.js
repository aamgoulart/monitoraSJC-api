const db = require("../models");
const InformationOfCity = db.informationOfCity;


// DONE
// this endpoint return informations of tse, health and ibge from city, this can be used in page of city
exports.getAll = (req, res) => {
    const term = req.query.term;
    InformationOfCity.find({ "municipio": { '$regex': term } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };