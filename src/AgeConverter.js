export class AgeConverter {
  constructor (earthAge) {
    this.earthAge = earthAge;
    this.conversionFactors = {
      mercury: 1 / 0.24,
      venus: 1 / 0.62,
      mars: 1 / 1.88,
      jupiter: 1 / 11.86,
    };
  }

  getAge(planet) {
    return this.earthAge * this.conversionFactors[planet];
  }
}
