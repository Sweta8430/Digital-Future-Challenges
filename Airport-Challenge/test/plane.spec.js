const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 5a - Test to see if a plane is at the airport before telling it to take off

console.log(
  `==========================================================================`
);
console.log(
  `Test 5a - See if a plane is at the airport before telling it to take off`
);

// Arrange
airport = new Airport();
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
plane4 = { id: `plane4` };
plane5 = { id: `plane5` };
expected = "plane5 cannot take off as it is not at the airport.";

// Act
airport.landPlane(plane1.id);
airport.landPlane(plane2.id);
airport.landPlane(plane3.id);
airport.landPlane(plane4.id);
actual = airport.takeOff(plane5.id);

// Assert
result = assertEquals(actual, expected);
console.log(
  `See if a plane is at the airport before telling it to take off: ${result}`
);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5b - Test to see if a plane is at the airport before telling it to take off

console.log(
  `==========================================================================`
);
console.log(`Test 5b - See if plane is landed before asking it to land`);

// Arrange
airport = new Airport();
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
plane4 = { id: `plane4` };
plane5 = { id: `plane5` };
expected = "plane1 is already at the Airport.";

// Act
airport.landPlane(plane1.id);
airport.landPlane(plane2.id);
airport.landPlane(plane3.id);
airport.landPlane(plane4.id);
actual = airport.landPlane(plane1.id);

// Assert
result = assertEquals(actual, expected);
console.log(
  `See if plane is already landed before asking it to land: ${result}`
);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
