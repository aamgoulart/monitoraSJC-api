module.exports = app => {
    const covid = require("../controllers/covid.controller");
  
    var router = require("express").Router();
    
    router.get("/", covid.getAll);

    app.use('/api/covid', router);
  };