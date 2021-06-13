const db = require("../models");
const Cases = db.cases;


// DONE
// this endpoint return informations of tse, health and ibge from city, this can be used in page of city
exports.getAll = (req, res) => {
   Cases.find()
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