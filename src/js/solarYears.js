export default class SolarYears{
  constructor(earthYears, planetYears){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
  }

  mercury(){
    this.planetYears = this.earthYears / .24;
    return this.planetYears;
  }


};