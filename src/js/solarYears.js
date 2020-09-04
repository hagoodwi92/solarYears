export default class SolarYears{
  constructor(earthYears, planetYears, yearsLeftOver){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
      this.yearsLeftOver = yearsLeftOver;
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

  }



};