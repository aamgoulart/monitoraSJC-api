const validateDate = require("../../functions/validateDate");

describe('Testando função de validar data', () => {
    
    test('Deve retornar o valor true para a entrada "2021-05-01"', () => {
        let isDate = validateDate('2021-05-01');

        expect(typeof isDate === 'string').toBe(true);
    });

    test('Deve retornar o valor true para a entrada "Thu May 27 2021 09:54:05 GMT-0400 (Horário Padrão do Amazonas)"', () => {
        let isDate = validateDate('Thu May 27 2021 09:54:05 GMT-0400 (Horário Padrão do Amazonas)');

        expect(typeof isDate === 'string').toBe(true);
    });

    test('Deve retornar o valor true para a entrada "new Date()"', () => {
        let isDate = validateDate(new Date());

        expect(typeof isDate === 'string').toBe(true);
    });

    test('Deve retornar o valor true para a entrada "Thu May 27 2021"', () => {
        let isDate = validateDate('Thu May 27 2021');

        expect(typeof isDate === 'string').toBe(true);
    });

    test('Deve retornar o valor false para a entrada ""', () => {
        let isDate = validateDate('');

        expect(isDate).toBe(false);
    });

    test('Deve retornar o valor false para uma string que não seja date', () => {
        let isDate = validateDate('teste string date');

        expect(isDate).toBe(false);
    });
})