const calc = require('./calc');

function addPercentageAppliedOnIbgeDoses(data) {

    let dataWithPercentual = data.map((dosesDados) => {
        let percentageVacinaccion = calc.percentage.oneValueInAnother(
          dosesDados.dose2,
          dosesDados.populacao
        );

        return {
          ...dosesDados.toObject(),
          populacao_vacinada_dose2: percentageVacinaccion,
        };
    });

    return dataWithPercentual;
}

module.exports = addPercentageAppliedOnIbgeDoses;