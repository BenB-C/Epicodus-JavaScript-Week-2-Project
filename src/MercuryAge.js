export class MercuryAge {
  constructor (earthAge) {
    this.earthAge = earthAge;
  }

  getAge() {
    return this.earthAge / 0.24;
  }
}
