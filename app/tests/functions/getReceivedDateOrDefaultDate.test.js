const getReceivedDateOrDefaultDate = require("../../functions/getReceivedDateOrDefaultDate")

describe('Testando função que retorna data informada ou a de ontem', () => {

    test('Deve retornar a data informada', () => {
        let dateString = '2021-05-28';
        let date = getReceivedDateOrDefaultDate(dateString);

        expect(date).toBe(new Date(dateString).toISOString());
    })

    test('Deve retornar a data de ontem', () => {
        let dateString = '';
        let date = getReceivedDateOrDefaultDate(dateString);

        expect(date ? true : false).toBe(true);
    })
})