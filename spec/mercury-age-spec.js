import { MercuryAge } from './../src/triangle.js';

describe('MercuryAge.constructor', function() {
  it('should store age in earth years in earthAge property', function() {
    var mercuryAge = new MercuryAge(38)
    expect(mercuryAge.earthAge).toEqual(38);
  });
});

describe('MercuryAge.getAge', function() {
  it('should return its earthAge in Mercury years', function() {
    var mercuryAge = new MercuryAge(38)
    expect(mercuryAge.getAge()).toEqual(158.33);
  });
});
