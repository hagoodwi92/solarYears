export default class SolarYears{
  constructor(earthYears, planetYears, yearsExpected, yearsLeftOver, yearsPastExpect){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
      this.yearsExpected = yearsExpected;
      this.yearsLeftOver = yearsLeftOver;
      this.earthExpect = 78;
      this.yearsPastExpect = yearsPastExpect;
  }

  mercury(){
    this.planetYears = Math.round(this.earthYears / .24);
    return this.planetYears;
  }

  venus(){
    this.planetYears = Math.round(this.earthYears / .62);
    return this.planetYears;
  }

  mars(){
    this.planetYears = Math.round(this.earthYears / 1.88);
    return this.planetYears;
  }

  jupiter(){
    this.planetYears = Math.round(this.earthYears / 11.86);
    return this.planetYears;
  }

  yearsLeft(){
    this.yearsExpected = this.earthExpect / .24;
    this.yearsLeftOver = this.yearsExpected - this.planetYears;
    return this.yearsLeftOver;
  }

  yearsPast(){
    
    return this.yearsPastExpect;
  }



};