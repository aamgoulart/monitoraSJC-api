module.exports = app => {
    const vacinacao = require("../controllers/vacinacao.controller.js");
  
    var router = require("express").Router();
  

  
    // Retrieve all vacinacao
    router.get("/", vacinacao.findAll);
    router.get("/search", vacinacao.search);
    router.get("/dosesDelivered", vacinacao.dosesDeliveredOfDay);
    router.get("/dose-day", vacinacao.dosageByday);
    router.get("/order", vacinacao.findAllOrberBy);

    app.use('/api/vacinacao', router);
  };