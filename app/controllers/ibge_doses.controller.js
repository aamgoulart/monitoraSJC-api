const db = require("../models");
const Doses = db.doses;

const sumDosesByDay = require("../functions/sumDoses");
const sumTotalDosesFromState = require("../functions/sumTotalDosesFromState");
const addPercentageAppliedOnIbgeDoses = require("../functions/addPercentageAppliedOnIbgeDoses");
const addFieldOfCity = require('../functions/addFieldsOfCity');
const validateDate = require('../functions/validateDate');

// DONE
// this enpoint return information of vaccination, and this can be used in table of the cities
exports.findAll = (req, res) => {
  const limit = parseInt(req.query.limit);
  const skip = parseInt(req.query.skip);
  const date = req.query.date;

  Doses.find({ data_atualizacao: date })
    .skip(skip)
    .limit(limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

//DONE
// this return name of city and code ibge, can be used in  search components
exports.city = (req, res) => {
  const { date } = req.query;

  Doses.find({
    data_atualizacao: date,
  })
    .select({
      municipio: true,
       cod_ibge: true,
       _id: false
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// DONE
// this need to return timeline vaccination of state São Paulo, can be used in charts
exports.dosesOfDay = async (req, res) => {
  const { start, end } = req.query;

  const dateStart = validateDate(start);
  const dateEnd = validateDate(end);
  
  const receivedTwoDates = dateStart && dateEnd;

  const optionFindInDB = () => {
    return receivedTwoDates
      ? Doses.aggregate([
          { $match: { data_atualizacao: { $gte: dateStart, $lt: dateEnd } } },
        ])
      : Doses.find();
  };

  try {
    const docs = await optionFindInDB();

    const sumDoses = sumDosesByDay(docs);
    return res.json(sumDoses);
  } catch (error) {
    return res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving tutorials.",
    });
  }
};

// DONE
// this need to return timeline vaccination of city, can be used in charts
exports.dosesOfDayByCity = (req, res) => {
  
  const limit = parseInt(req.query.limit);
  const skip = parseInt(req.query.skip);
  const term = req.query.term;
  
  Doses.find({ municipio: { $regex: term.toUpperCase() } })
    .skip(skip)
    .limit(limit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// NOT DONE - this return nothing
// needs to return sum of all cities because we need information of state, can be used in page home
exports.dosesOfDayLastUpdate = (req, res) => {
  const date = req.query.date.replace(" ", "+");
  Doses.aggregate([
    {
      $match: {
        data_atualizacao: new Date(date).toISOString(),
      },
    },
    {
      $group: {
        _id: "$municipio",
        doseOne: { $sum: "$dose1" },
        dosetwo: { $sum: "$dose2" },
        appliedDoses: { $sum: "$doses_aplicadas" },
      },
    },
  ])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// NOT DONE - return only code ibge and name city

// needs to return vaccination information of last day
exports.search = (req, res) => {
  const date = req.query.date.replace(" ", "+");
  const term = req.query.term;

  Doses.find(
    { data_atualizacao: new Date(date).toISOString() },
    { municipio: term }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.currentVaccinationData = async (req, res) => {
  let { date } = req.query;

  try {
    const totalDosesByCityOnDate = await Doses.find({
      data_atualizacao: date,
    }).select({
      _id: false,
      dose1: true,
      dose2: true,
      populacao: true,
      data_atualizacao: true,
    });

    if (!totalDosesByCityOnDate.length)
      return res
        .status(500)
        .send("Não foi encontrado dados para o dia informado.");

    let totalDosesFromState = sumTotalDosesFromState(totalDosesByCityOnDate);

    res.json(totalDosesFromState);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.rankingCitiesByVaccinationProgress = (req, res) => {
  let { date } = req.query;

  console.log(date);

  Doses.find({
    data_atualizacao: date,
  })
    .sort({ pop_vacinada_por_total: -1 })
    .select({
      _id: false,
      doses_aplicadas: false,
      doses_aplicadas_por_distribuidas: false,
      pop_vacinada_por_total: false,
    })
    .limit(10)
    .then(async (data) => {
      if (data) {
        data = addPercentageAppliedOnIbgeDoses(data);

        let selectFieldsFromCity = { area: 1, postos: 1 };
        data = await addFieldOfCity(data, selectFieldsFromCity);
      }

      return res.json(data);
    })

    .catch((e) => (err) => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
