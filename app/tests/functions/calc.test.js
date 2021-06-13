const calc = require("../../functions/calc")

describe('Testando funções de calculo', () => {
    
    test('Deve retornar a porcentagem que um número representa de outro', () => {
        let percentage = calc.percentage.oneValueInAnother(10, 20);

        expect(percentage).toBe(50);
    })
})