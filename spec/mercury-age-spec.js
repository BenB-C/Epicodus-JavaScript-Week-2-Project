import { MercuryAge } from './../src/MercuryAge.js';

const eps = 0.01;
const mercuryAge = new MercuryAge(38);

describe('MercuryAge', function() {
  it('should store age in earth years in earthAge property', function() {
    expect(mercuryAge.earthAge).toEqual(38);
  });
});

describe('MercuryAge.getAge', function() {
  it('should return its earthAge in Mercury years', function() {
    expect(mercuryAge.getAge()).toBeCloseTo(158.33, eps);
  });
});
