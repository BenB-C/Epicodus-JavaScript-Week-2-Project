export class AgeConverter {
  constructor (earthAge) {
    this.earthAge = earthAge;
    this.conversionFactors = {
      mercury: 1 / 0.24,
    };
  }

  getAge(planet) {
    return this.earthAge * this.conversionFactors[planet];
  }
}
