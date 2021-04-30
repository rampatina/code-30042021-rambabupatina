const utils = require('../utils');

test('getBmi', () => {
    expect(utils.getBmi(175, 75)).toBe(24.49);
});

test('getBmi negetive case', () => {
    expect(utils.getBmi(167, 82)).not.toBe(24.49);
});

test('getCategeoryAndRiskLevel', () => {
    expect(utils.getCategeoryAndRiskLevel(24.49)).toStrictEqual({categeory : 'Normal weight', risk : 'Low risk'});
});

test('getCategeoryAndRiskLevel negetive case', () => {
    expect(utils.getCategeoryAndRiskLevel(29.49)).not.toStrictEqual({categeory : 'Normal weight', risk : 'Low risk'});
});

test('addColumns', () => {
    expect(utils.addColumns({"Gender": "Male", "HeightCm": 175, "WeightKg": 75 })).toStrictEqual({
        Gender: 'Male',
        HeightCm: 175,
        WeightKg: 75,
        BMI: 24.49,
        BMICategeory: 'Normal weight',
        HealthRisk: 'Low risk'
      });
});

test('addColumns no height', () => {
    expect(utils.addColumns({"Gender": "Male", "WeightKg": 75 })).toBe(null);
});

test('addColumns negetive', () => {
    expect(utils.addColumns({"Gender": "Male", "HeightCm": 175, "WeightKg": 75 })).not.toStrictEqual({
        Gender: 'Female',
        HeightCm: 166,
        WeightKg: 62,
        BMI: 22.5,
        BMICategeory: 'Normal weight',
        HealthRisk: 'Low risk'
      });
});

test('addColumns no height', () => {
    expect(utils.addColumns({"Gender": "Male", "WeightKg": 75 })).not.toStrictEqual({
        Gender: 'Male',
        HeightCm: 175,
        WeightKg: 75,
        BMI: 24.49,
        BMICategeory: 'Normal weight',
        HealthRisk: 'Low risk'
      });
});
