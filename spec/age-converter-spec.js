import AgeConverter from './../src/AgeConverter.js';

const ageConverter = new AgeConverter(38);

describe('AgeConverter', function() {
  it('should store age in earth years in earthAge property', function() {
    expect(ageConverter.earthAge).toEqual(38);
  });
});

describe('getAge("mercury")', function() {
  it('should return earth age in Mercury years', function() {
    expect(ageConverter.getAge("mercury")).toEqual(158);
  });
});

describe('getAge("venus")', function() {
  it('should return earth age in Venus years', function() {
    expect(ageConverter.getAge("venus")).toEqual(61);
  });
});

describe('getAge("mars")', function() {
  it('should return earth age in Mars years', function() {
    expect(ageConverter.getAge("mars")).toEqual(20);
  });
});

describe('getAge("Jupiter")', function() {
  it('should return earth age in Jupiter years', function() {
    expect(ageConverter.getAge("jupiter")).toBeCloseTo(3);
  });
});

describe('getAgeDescription("Earth")', function() {
  it('should return earth age description in Earth years', function() {
    const expectedResult = "On Earth your age is 38"
    expect(ageConverter.getAgeDescription("earth")).toEqual(expectedResult);
  });
});
