module.exports = app => {
    const informationOfCity = require("../controllers/ibge_novo.controller.js");
  
    var router = require("express").Router();
    
    router.get("/", informationOfCity.getAll);

    app.use('/api/city', router);
  };