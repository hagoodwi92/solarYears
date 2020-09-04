export default class SolarYears{
  constructor(earthYears, planetYears, yearsExpected, yearsLeftOver, yearsPastExpect){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
      this.yearsExpected = yearsExpected;
      this.yearsLeftOver = yearsLeftOver;
      this.earthExpect = 78;
      this.yearsPastExpect = yearsPastExpect;
      this.displayString = "";
      this.mercuryVal = .24;
      this.venusVal = .62;
      this.marsVal = 1.88;
      this.jupiterVal = 11.86;
  }

  /* planet(planetVal){
    this.yearsExpected = this.earthExpect / planetVal;
    this.planetYears = Math.round(this.earthYears / planetVal);
    return this.planetYears;
  } */

  mercury(){
    this.yearsExpected = this.earthExpect / this.mercuryVal;
    this.planetYears = Math.round(this.earthYears / this.mercuryVal);
    return this.planetYears;
  }

  venus(){
    this.yearsExpected = this.earthExpect / this.venusVal;
    this.planetYears = Math.round(this.earthYears / this.venusVal);
    return this.planetYears;
  }

  mars(){
    this.yearsExpected = this.earthExpect / this.marsVal;
    this.planetYears = Math.round(this.earthYears / this.marsVal);
    return this.planetYears;
  }

  jupiter(){
    this.yearsExpected = this.earthExpect / this.jupiterVal;
    this.planetYears = Math.round(this.earthYears / this.jupiterVal);
    return this.planetYears;
  }

  yearsLeft(){
    this.yearsLeftOver = Math.round(this.yearsExpected - this.planetYears);
    return this.yearsLeftOver;
  }

  yearsPast(){
    this.yearsPastExpect = Math.round(this.planetYears - this.yearsExpected);
    this.yearsPastExpect = Math.abs(this.yearsPastExpect);
    return this.yearsPastExpect;
  }

  display(){
    let age = this.earthYears;
    let planetAge = this.planetYears;
    this.displayString = `Your age is ${age}, and your planet age is ${planetAge}.`
    return this.displayString;
  }
  displayYearsLeft(){
    let yearsLeft = this.yearsLeftOver;
    this.displayString = `You have ${yearsLeft} years left to live.`
    return this.displayString;
  }

  displayYearsPast(){
    let yearsPast = this.yearsPastExpect;
    this.displayString = `You have already lived ${yearsPast} years too long.`
    return this.displayString;
  }

};