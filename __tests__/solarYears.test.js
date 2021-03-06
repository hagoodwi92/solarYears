import SolarYears from './../src/js/solarYears.js';

describe('SolarYears', () => {

  test('should correctly create a SolarYears object with properties', () => {
    const solar = new SolarYears(10,55,60,50,55);
    expect(solar.earthYears).toEqual(10);
    expect(solar.planetYears).toEqual(55); 
    expect(solar.yearsExpected).toEqual(60);
    expect(solar.yearsLeftOver).toEqual(50);
    expect(solar.earthExpect).toEqual(78);
    expect(solar.yearsPastExpect).toEqual(55);
    expect(solar.displayString).toEqual("");
  });
  test('Should correctly calculate users age on Mercury', () => {
    const solar = new SolarYears(27);
    solar.mercury();
    expect(solar.earthYears).toEqual(27);
    expect(solar.planetYears).toEqual(113); 
  });
  test('Should correctly calculate users age on Venus', () => {
    const solar = new SolarYears(27);
    solar.venus();
    expect(solar.earthYears).toEqual(27);
    expect(solar.planetYears).toEqual(44); 
  });
  test('Should correctly calculate users age on Mars', () => {
    const solar = new SolarYears(27);
    solar.mars();
    expect(solar.earthYears).toEqual(27);
    expect(solar.planetYears).toEqual(14); 
  });

  test('Should correctly calculate users age on Jupiter', () => {
    const solar = new SolarYears(27);
    solar.jupiter();
    expect(solar.earthYears).toEqual(27);
    expect(solar.planetYears).toEqual(2); 
  });

  test('Should correctly calculate users years left on mercury, based on given life expectancy', () => {
    const solar = new SolarYears(27);
    solar.mercury();
    solar.yearsLeft(); 
    expect(solar.yearsLeftOver).toEqual(212);
  });

  test('Should correctly caculate users years lived past given life expectancy on a planet', () => {
    const solar = new SolarYears(27);
    solar.jupiter();
    solar.yearsPast();
    expect(solar.yearsPastExpect).toEqual(-5); 
  });  

  test('Should correctly return ouput using literals', () => {
    const solar = new SolarYears(27);
    solar.jupiter();
    solar.yearsPast();
    solar.yearsLeft();
    solar.display();
    expect(solar.displayString).toEqual("Your earth age is 27, and your planet age is 2. You have 5 years left to live in planet years, which means you have already lived -5 years too long in planet years."); 
  }); 

  test('Should correctly return years left output using literals', () => {
    const solar = new SolarYears(27);
    solar.jupiter();
    solar.yearsLeft();
    solar.displayYearsLeft();
    expect(solar.displayString).toEqual("You have 5 years left to live."); 
  });

  test('Should correctly return years past expectancy output using literals', () => {
    const solar = new SolarYears(27);
    solar.jupiter();
    solar.yearsPast();
    solar.displayYearsPast();
    expect(solar.displayString).toEqual("You have already lived -5 years too long."); 
  });

  test('Should correctly calculate solar years on any planet passed', () => {
    const solar = new SolarYears(27);
    solar.planet();
    expect(solar.planet(solar.marsVal)).toEqual(14); 
    expect(solar.planet(solar.mercuryVal)).toEqual(113);
  });
}); 

