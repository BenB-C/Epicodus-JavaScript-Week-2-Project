// A class for converting an earth age to the equivalent age on other planets.
export default class AgeConverter {
  constructor (earthAge) {
    this.earthAge = earthAge;
    this.conversionQuotients= {
      mercury:  0.24,
      venus:    0.62,
      earth:    1.00,
      mars:     1.88,
      jupiter: 11.86,
    };
  }

  // Returns this object's age on the given planet.
  getAge (planet) {
    return Math.round(this.earthAge / this.conversionQuotients[planet]);
  }

  // Returns a description of this object' age on the given planet
  getAgeDescription (planet) {
    const planetStr = planet[0].toUpperCase() + planet.slice(1);
    return `On ${planetStr} your age is ${this.getAge(planet)}`;
  }
}
