const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Is plane landing to the Airport?

console.log(`========================================`);
console.log(`Test 1 - palne is landing to the Airport`);

// Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = "plane1";

// Act
airport.landPlane(plane.id);
actual = airport.planesAtAirport.toString();

// Assert
result = assertEquals(actual, expected);
console.log(`Plane is landing to the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - can Manager override the capacity of Airport?

console.log(`===========================================`);
console.log(`Test 2 - Overriding the capacity of Airport`);

// Arrange
airport = new Airport(50);
expected = 90;

// Act
newCapacity = 40;
actual = airport.overrideCapacity(newCapacity);

// Assert
result = assertEquals(actual, expected);
//console.log(actual);
//console.log(expected);
console.log(`Airport Capacity has been overrided: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 - can plane land when airport is full?

console.log(`==================================================`);
console.log(`Test 3 - Trying to land plane when airport is full`);

// Arrange
airport = new Airport(2);
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
plane4 = { id: `plane4` };
expected = "Airport is Full.";

// Act
airport.landPlane(plane1.id);
airport.landPlane(plane2.id);
actual = airport.landPlane(plane3.id);
// Assert
result = assertEquals(actual, expected);
// console.log(actual);
// console.log(expected);
console.log(`Airport is Full: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
