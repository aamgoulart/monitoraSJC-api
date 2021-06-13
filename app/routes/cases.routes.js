module.exports = app => {
    const cases = require("../controllers/cases.controller");
  
    var router = require("express").Router();
    
    router.get("/", cases.getAll);

    app.use('/api/cases', router);
  };