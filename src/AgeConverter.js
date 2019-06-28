// A class for converting an earth age to the equivalent age on other planets.
export class AgeConverter {
  constructor (earthAge) {
    this.earthAge = earthAge;
    this.conversionQuotients= {
      mercury:  0.24,
      venus:    0.62,
      mars:     1.88,
      jupiter: 11.86,
    };
  }

  // Returns this object's age on the given planet.
  getAge(planet) {
    return this.earthAge / this.conversionQuotients[planet];
  }
}
