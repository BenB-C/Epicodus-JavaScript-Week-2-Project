import { AgeConverter } from './../src/AgeConverter.js';

const eps = 0.01;
const ageConverter = new AgeConverter(38);

describe('AgeConverter', function() {
  it('should store age in earth years in earthAge property', function() {
    expect(ageConverter.earthAge).toEqual(38);
  });
});

describe('getAge("mercury")', function() {
  it('should return its earth age in Mercury years', function() {
    expect(ageConverter.getAge("mercury")).toBeCloseTo(158.33, eps);
  });
});
