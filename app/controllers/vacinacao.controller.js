const db = require("../models");
const Vacinacao = db.vacinacao;

exports.findAll = (req, res) => {
  const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
  Vacinacao.find().skip(skip).limit(limit)
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


exports.search = (req, res) => {
  const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
  const term = req.query.term;
  Vacinacao.find({ "municipio": { '$regex': term.toUpperCase() } }).skip(skip).limit(limit)
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

exports.dosesDeliveredOfDay = (req, res) => {
  Vacinacao.aggregate([
    {
      $group: {
        _id: "$data_atualizacao",
        count: { "$sum": "$doses_entregues" }
      }
    }
  ]).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}

exports.dosageByday = (req, res) => {
  Vacinacao.aggregate([
    {
      $group: {
        _id: "$data_atualizacao",
        doseOne: { "$sum": "$dose_um" },
        dosetwo: { "$sum": "$dose_dois" }

      }
    }
  ]).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
}

exports.findAllOrberBy = (req, res) => {
  const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  const skip = parseInt(req.query.skip);// Make sure to parse the skip to number
  const orderCity = parseInt(req.query.orderCity);

  Vacinacao.find().skip(skip).limit(limit).sort( { dose_um: orderCity } )
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

