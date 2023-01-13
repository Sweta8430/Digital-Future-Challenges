## Solution For the Airport Challange

1. Fork the Airport Challnge repo into your github Account
2. Clone into your local directory.
3. Open a Terminal and run the npm install command to download the dependencies.

## Domain Modelling

### User Story 1

1. As an air traffic controller
2. So I can get passengers to a destination
3. I want to instruct the airport to land a plane

**Domain Modelling for User Story 1**

As a Air Traffic Controller
I want to land a plane to the Airport.

| **Object** | **Properties**                | **Message**        | **output** |
| ---------- | ----------------------------- | ------------------ | ---------- |
| Airport    | planesAtAirport@Array(@plane) | landPlane(@String) | @String    |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

## Domain Modelling

### User Story 2

1. As the system designer
2. So that the software can be used for many different airports
3. I would like a default airport capacity that can be overridden as appropriate

**Domain Modelling for User Story 2**

As a System Manager
I would like to override the airport capacity as required

| **Object** | **Properties**                | **Message**            | **output** |
| ---------- | ----------------------------- | ---------------------- | ---------- |
| Airport    | capacity(@int) const or final | overrideCapacity(@int) | @int       |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

## Domain Modelling

### User Story 3

1. As an air traffic controller
2. To ensure safety ,I want to prevent landing when the airport is full

**Domain Modelling for User Story 3**

As an ATC i want to prevent landing when Airport is full

| **Object** | **Properties**                | **Message**     | **output** |
| ---------- | ----------------------------- | --------------- | ---------- |
| Airport    | capacity(@int) const or final | isAirportFull() | @boolean   |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

## Domain Modelling

### User Story 4a

1. As an air traffic controller
2. So I can get passengers on the way to their destination
3. I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

**Domain Modelling for User Story 4a**

1. As an ATC i want to instruct the airport to takeoff the plane.

| **Object** | **Properties**                | **Message**               | **output** |
| ---------- | ----------------------------- | ------------------------- | ---------- |
| Airport    | planesAtAirport@Array(@plane) | takeOff(@string)          | @string    |
|            |                               | isPlaneAtAirport(@string) | @boolean   |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

### User Story 4b

1. As an air traffic controller
2. So I can get passengers on the way to their destination
3. I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

**Domain Modelling for User Story 4b**

1. As ATC i want to confirm the plane is no longer at Airport.

| **Object** | **Properties**                | **Message**                       | **output** |
| ---------- | ----------------------------- | --------------------------------- | ---------- |
| Airport    | planesAtAirport@Array(@plane) | confirmPlaneNotAtAirport(@string) | @int       |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js

### User Story 5a and 5b

1. As an air traffic controller
2. To avoid confusion
3. I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

**Domain Modelling for User Story 5a and 5b**

1. As an ATC to avoid confusion see if a plane is at the airport before telling it to take off.
2. As an ATC to avoid confusion see if plane is already at the airport before asking it to land.

| **Object** | **Properties**                | **Message**               | **output** |
| ---------- | ----------------------------- | ------------------------- | ---------- |
| Airport    | planesAtAirport@Array(@plane) | takeOff(@string)          | @string    |
|            |                               | landPlane(@String)        | @string    |
|            |                               | isPlaneAtAirport(@String) | @boolean   |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js
