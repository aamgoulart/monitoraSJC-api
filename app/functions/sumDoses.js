function sumDoses(docs) {
  let dataAtual = "";
  let sumDoses = [];
  let indexArraySumDoses = -1;

  docs.forEach((element) => {
    let date_atualizacao = new Date(element.data_atualizacao).valueOf();
    let date_dataAtual = dataAtual != "" ? new Date(dataAtual).valueOf() : 0;
    if (date_atualizacao > date_dataAtual) {
      dataAtual = element.data_atualizacao;
      indexArraySumDoses++;
      sumDoses.push({
        dose1: 0,
        dose2: 0,
        doses_aplicadas: 0,
        data_atualizacao: element.data_atualizacao,
      });
    }

    sumDoses[indexArraySumDoses].dose1 += Number(element.dose1);
    sumDoses[indexArraySumDoses].dose2 += Number(element.dose2);
    sumDoses[indexArraySumDoses].doses_aplicadas += Number(element.doses_aplicadas);
  });

  return sumDoses;
}

module.exports = sumDoses;
