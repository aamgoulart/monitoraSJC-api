const sumTotalDosesFromState = require("../../functions/sumTotalDosesFromState");

describe('Testando função de calculo total de doses', () => {
    
    test('Deve retornar o total de doses1, doses2 e porcentagem da população vacinada', () => {
        let totalDosesOnDay = sumTotalDosesFromState(dadosVacinacaoMock);

        expect(totalDosesOnDay.dose1).toBe(140);
        expect(totalDosesOnDay.dose2).toBe(100);
        expect(totalDosesOnDay.populacao_vacinada_dose1).toBe(70);
        expect(totalDosesOnDay.populacao_nao_vacinada_dose1).toBe(30);
        expect(totalDosesOnDay.populacao_vacinada_dose2).toBe(50);
        expect(totalDosesOnDay.populacao_nao_vacinada_dose2).toBe(50);
    })
});

let dadosVacinacaoMock = [
    {
        populacao: 100,
        dose1: 70,
        dose2: 50,
    },
    {
        populacao: 100,
        dose1: 70,
        dose2: 50,
    }
]