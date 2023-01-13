const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 4a - Has plane taken off and no longer at the airport?

console.log(`============================`);
console.log(`Test 4a - Plane has taken off`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
plane4 = { id: `plane4` };
plane5 = { id: `plane5` };
expected = "plane1 has taken off";

// Act
airport.landPlane(plane1.id);
airport.landPlane(plane2.id);
airport.landPlane(plane3.id);
airport.landPlane(plane4.id);
actual = airport.takeOff(plane1.id);

// Assert
result = assertEquals(actual, expected);
console.log(`Plane has taken off Successfully: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 4b - confirming plane is no longet at airport after takeoff

console.log(`=================================================`);
console.log(`Test 4b - confirming plane is no longer at airport`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
plane4 = { id: `plane4` };
plane5 = { id: `plane5` };
expected = 3;

// Act
airport.landPlane(plane1.id);
airport.landPlane(plane2.id);
airport.landPlane(plane3.id);
airport.landPlane(plane4.id);
airport.confirmPlaneNotAtAirport(plane1.id);
actual = airport.planesAtAirport.length;

// Assert
// console.log(actual);
// console.log(expected);
result = assertEquals(actual, expected);
console.log(`confirming  Plane is no longer at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
