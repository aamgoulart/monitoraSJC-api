module.exports = app => {
  const doses = require("../controllers/ibge_doses.controller.js");
  const handleDateParameter = require('../functions/handleDateParameter');
  const verifyLastDateUpdate = require('../functions/verifyLastDateUpdate');

  var router = require("express").Router();

  // Retrieve all vacinacao
  router.get("/", verifyLastDateUpdate, handleDateParameter, doses.findAll);
  router.get("/city", verifyLastDateUpdate, handleDateParameter, doses.city);
  router.get("/doses-of-day", doses.dosesOfDay);
  router.get("/doses-of-day/city", doses.dosesOfDayByCity);
  router.get("/doses-of-day/last-update", doses.dosesOfDayLastUpdate);

  router.get("/:state/current-vaccination-data", verifyLastDateUpdate, handleDateParameter, doses.currentVaccinationData);
  router.get("/:state/ranking-cities-by-vaccination-progress", verifyLastDateUpdate, handleDateParameter, doses.rankingCitiesByVaccinationProgress);

  app.use('/api/doses', router);
};