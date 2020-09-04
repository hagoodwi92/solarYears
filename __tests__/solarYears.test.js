import SolarYears from './../src/js/solarYears.js';

describe('SolarYears', () => {

  test('should correctly create a SolarYears object with 2 properties', () => {
    const solar = new SolarYears(10,55);
    expect(solar.earthYears).toEqual(10);
    expect(solar.planetYears).toEqual(55); 
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
    expect(solar.planetYears).toEqual(51); 
  });


});

