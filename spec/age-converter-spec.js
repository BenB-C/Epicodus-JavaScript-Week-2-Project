import { AgeConverter } from './../src/AgeConverter.js';

const precision = 2; // number of decimal points to check when comparing floating point numbers
const ageConverter = new AgeConverter(38);

describe('AgeConverter', function() {
  it('should store age in earth years in earthAge property', function() {
    expect(ageConverter.earthAge).toEqual(38);
  });
});

describe('getAge("mercury")', function() {
  it('should return earth age in Mercury years', function() {
    console.log(ageConverter.getAge("mercury"));
    expect(ageConverter.getAge("mercury")).toBeCloseTo(158.33, precision);
  });
});

describe('getAge("venus")', function() {
  it('should return earth age in Venus years', function() {
    expect(ageConverter.getAge("venus")).toBeCloseTo(61.29, precision);
  });
});

describe('getAge("mars")', function() {
  it('should return earth age in Mars years', function() {
    expect(ageConverter.getAge("mars")).toBeCloseTo(20.21, precision);
  });
});

describe('getAge("Jupiter")', function() {
  it('should return earth age in Jupiter years', function() {
    expect(ageConverter.getAge("jupiter")).toBeCloseTo(3.20, precision);
  });
});
