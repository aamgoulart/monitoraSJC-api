const calc = {
    percentage: {
        oneValueInAnother: (valueContainsOnTotal, valueTotal) => {
            let percentage = (valueContainsOnTotal / valueTotal) * 100;
            return Number(percentage.toFixed(2));
        }
    }
}

module.exports = calc;