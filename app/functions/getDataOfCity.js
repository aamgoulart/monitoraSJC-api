const { get } = require("mongoose");
const db = require("../models");
const Cidades = db.cidades;

 async function getDataOfCity(cod_ibge, select = {}) {

    let fields = { 
        _id: 0, 
        ...select
    }

    const dataCity = await Cidades.findOne({
        cod_ibge: cod_ibge,
      }).select(fields);

    return dataCity;
}

module.exports = getDataOfCity;