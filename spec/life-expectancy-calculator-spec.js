import { LifeExpectancyCalculator } from './../src/LifeExpectancyCalculator.js';

const precision = 2;
const lec = new LifeExpectancyCalculator();

describe('LifeExpectancyCalculator.getLifeExpectancy', function() {
  it('should return the life expectancy given an age of 38', function() {
    expect(lec.getLifeExpectancy(38)).toBeCloseTo(36.12, precision);
  });

  // boundary conditions
  it('should return the life expectancy given an age of 140', function() {
    expect(lec.getLifeExpectancy(118)).toBeCloseTo(-68.700001, precision);
  });

  it('should return the life expectancy given an age of 139', function() {
    expect(lec.getLifeExpectancy(119)).toBeCloseTo(-69.700001, precision);
  });

  it('should return the life expectancy given an age of 4', function() {
    expect(lec.getLifeExpectancy(4)).toBeCloseTo(75.244003, 6);
  });

  it('should return the life expectancy given an age of 3', function() {
    expect(lec.getLifeExpectancy(3)).toBeCloseTo(76.244003, 6);
  });

});
