export default class SolarYears{
  constructor(earthYears, planetYears){
      this.earthYears = earthYears;
      this.planetYears = planetYears;
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
    this.planetYears = Math.round(this.earthyears * 1.88);
    return this.planetYears;
  }



};