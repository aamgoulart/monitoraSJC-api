const getLastDay = require("../../functions/getLastDay");
const handleDateParameter = require("../../functions/handleDateParameter");

describe("Testando middleware de tratamento de data", () => {
  test("Deve manter data valida recebida pela query", () => {
    const mReq = {
      query: { date: "2021-05-01" },
    };
    const mRes = {};
    const mNext = () => {};

    handleDateParameter(mReq, mRes, mNext);

    expect(new Date("2021-05-01").toISOString()).toBe(
      mReq.query.date
    );
  });
  test("Deve alterar a data invalida recebida pela query", () => {
    const mReq = {
      query: { date: "" },
    };
    const mRes = {};
    const mNext = () => {};

    handleDateParameter(mReq, mRes, mNext);

    expect(getLastDay()).toBe(
      mReq.query.date
    );
  });
});
