const calc = require('./calc');

function sumTotalDosesFromState(dosesByCity) {
    
    let totalDosesFromState = {
        dose1: 0,
        dose2: 0,
        data_atualizacao: undefined
    }

    let populacaoTotal = 0;

    dosesByCity.forEach(element => {
        if(!totalDosesFromState.data_atualizacao) {
            totalDosesFromState.data_atualizacao = element.data_atualizacao;
        }

        totalDosesFromState.dose1 += Number(element.dose1);
        totalDosesFromState.dose2 += Number(element.dose2);
        populacaoTotal += Number(element.populacao);
    });

    totalDosesFromState.populacao_vacinada_dose1 = calc.percentage.oneValueInAnother(totalDosesFromState.dose1, populacaoTotal);
    totalDosesFromState.populacao_nao_vacinada_dose1 = calc.percentage.oneValueInAnother(populacaoTotal - totalDosesFromState.dose1, populacaoTotal);
    
    totalDosesFromState.populacao_vacinada_dose2 = calc.percentage.oneValueInAnother(totalDosesFromState.dose2, populacaoTotal);
    totalDosesFromState.populacao_nao_vacinada_dose2 = calc.percentage.oneValueInAnother(populacaoTotal - totalDosesFromState.dose2, populacaoTotal);

    return totalDosesFromState;
}


module.exports = sumTotalDosesFromState;