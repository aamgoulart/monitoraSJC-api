const getDataOfCity = require('./getDataOfCity');

async function addFieldOfCity(data, selectFieldsFromCity) {
  for (var i in data) {
    let { cod_ibge } = data[i];

    let city = await getDataOfCity(cod_ibge, selectFieldsFromCity);

    data[i] = {
      ...data[i],
      area: city.area,
      postos: city.postos,
    };
  }

  return data;
}

module.exports = addFieldOfCity;
