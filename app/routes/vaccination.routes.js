module.exports = app => {
    const vaccination = require("../controllers/vaccination.controller");
  
    var router = require("express").Router();
    
    router.get("/", vaccination.getAll);

    app.use('/api/vaccination', router);
  };