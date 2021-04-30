function getBmi(height, weight) {
    let res = weight / Math.pow(height/100, 2);
    return (Math.round(res * 100) / 100);
}

function getCategeoryAndRiskLevel(bmi) {
    let res = {};
    if (bmi < 18.5) {
        res.categeory = 'Underweight';
        res.risk = 'Malnutrition risk';
    } else if (bmi >= 18.5 && bmi < 25) {
        res.categeory = 'Normal weight';
        res.risk = 'Low risk';
    } else if (bmi >= 25 && bmi < 30 ) {
        res.categeory = 'Overweight';
        res.risk = 'Enhanced risk';
    } else if (bmi >=30 && bmi < 35) {
        res.categeory = 'Moderately obese';
        res.risk = 'Medium risk';
    } else if (bmi >= 35 && bmi < 40) {
        res.categeory = 'Severely obese';
        res.risk = 'High risk';
    } else {
        res.categeory = 'Very severely obese';
        res.risk = 'Very High risk';
    }
    return res;
}

function addColumns(value) {
    if (value.HeightCm && value.WeightKg && (!isNaN(Number(value.HeightCm)) || !isNaN(value.WeightKg))) {
        let bmi = getBmi(value.HeightCm, value.WeightKg);
        let res = getCategeoryAndRiskLevel(bmi);
        value.BMI = bmi;
        value.BMICategeory = res.categeory;
        value.HealthRisk = res.risk;
        console.log(value);
        return value;
    }
    return null;
}

module.exports = {
    getBmi,
    getCategeoryAndRiskLevel,
    addColumns
 }