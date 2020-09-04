export default class SolarYears{
  constructor(earthYears, planetYears, yearsExpected, yearsLeftOver, yearsPastExpect){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
      this.yearsExpected = yearsExpected;
      this.yearsLeftOver = yearsLeftOver;
      this.earthExpect = 78;
      this.yearsPastExpect = yearsPastExpect;
      this.displayString = "";
  }

  mercury(){
    this.yearsExpected = this.earthExpect / .24;
    this.planetYears = Math.round(this.earthYears / .24);
    return this.planetYears;
  }

  venus(){
    this.yearsExpected = this.earthExpect / .62;
    this.planetYears = Math.round(this.earthYears / .62);
    return this.planetYears;
  }

  mars(){
    this.yearsExpected = this.earthExpect / 1.88;
    this.planetYears = Math.round(this.earthYears / 1.88);
    return this.planetYears;
  }

  jupiter(){
    this.yearsExpected = this.earthExpect / 11.86;
    this.planetYears = Math.round(this.earthYears / 11.86);
    return this.planetYears;
  }

  yearsLeft(){
    this.yearsLeftOver = Math.round(this.yearsExpected - this.planetYears);
    return this.yearsLeftOver;
  }

  yearsPast(){
    this.yearsPastExpect = Math.round(this.planetYears - this.yearsExpected);
    return this.yearsPastExpect;
  }

  display(){
    let age = this.earthYears;
    let planetAge = this.planetYears;
    this.displayString = `Your age is ${age}, and your planet age is ${planetAge}.`
    return this.displayString;
  }

};