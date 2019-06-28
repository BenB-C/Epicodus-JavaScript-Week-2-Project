import { LifeExpectancyCalculator } from './../src/LifeExpectancyCalculator.js';

const precision = 2; // number of decimal points to check when comparing floating point numbers
const lec = new LifeExpectancyCalculator();

describe('LifeExpectancyCalculator.getLifeExpectancy', function() {
  it('should return the life expectancy at birth given an age', function() {
    expect(lec.getLifeExpectancy(38)).toBeCloseTo(36.12, precision);
  });
});
