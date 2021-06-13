require("dotenv/config");
require("../../models");
let bd = require('../../models');
const handleDateParameter = require('../../functions/handleDateParameter');

const ibgeDosesController = require("../../controllers/ibge_doses.controller");
const db = require("../../models");

describe("Testando endpoint doses --> current-vaccination-data", () => {
  test("Deve retornar o total de doses1, doses2 e porcentagem da população vacinada de acordo com dados do dia 2021-05-01", async () => {

    let responseData = {};

    const mReq = {
      params: { state: "sp" },
      query: { date: "2021-05-01" },
    };

    const mRes = {
      json: (json) => (responseData = json),
    };

    const next = () => {};

    handleDateParameter(mReq, mRes, next);

    await ibgeDosesController.currentVaccinationData(mReq, mRes);

    expect(responseData.dose1).toBe(7202074);
    expect(responseData.dose2).toBe(4134057);
    expect(responseData.populacao_vacinada_dose2).toBe(8.93);
  }, 10000);

  test("Deve informar erro ao não encontrar dados referente ao dia informado", async () => {

    let error = {
      message: '',
      status: ''
    };

    const mReq = {
      params: { state: "sp" },
      query: { date: new Date().toISOString() },
    };

    const mRes = {
      status: (status) => {
        error.status = status;
        return {
          send: (errorMessage) => error.message = errorMessage,
        }
      },
    };

    const next = () => {};

    handleDateParameter(mReq, mRes, next);

    await ibgeDosesController.currentVaccinationData(mReq, mRes);
    
    expect(error.message).toBe('Não foi encontrado dados para o dia informado.');
    expect(error.status).toBe(500);

    db.mongoose.connection.close();
  });

});