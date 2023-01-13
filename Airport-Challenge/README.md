# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## Instructions

- Feel free to use google, your notes, books, etc. but work on your own.
- Keep it SIMPLE - it's not nearly as complicated as it first may look.
- You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
- Use your own test framework and evidence your test-driven development by committing on passing tests.
- Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
- If you refer to the solution of another coach or student, please put a link to that in your README.
- Please create separate files for every class, module, and spec.

## Steps

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

## Task

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria

```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

# About This Project

### Project Name : - Airport Challange

```
This Project gives yoy the basic understanding of using JavaScript,node.js and Testing Framework.
In this Project with JavaScript you can enhance your knowledgde of Variable Declarations,conditional
statements and loops ect..
With node.js hou you can install Dependencies and run the specRunner.js
With Testing Framework you can try to make your code with less bugs or Errorfree.
```

## Pre-Requisite and Installation

```
1. Fork the Airport Challnge repo into your github Account
2. Clone into your local directory.
3. Open a Terminal and run the npm install command to download the dependencies.
```

# Solution For the Airport Challange

## Domain Modelling

### User Story 1

```
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
```

## Domain Modelling

### User Story 2

```
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
```

## Domain Modelling

### User Story 3

```
1. As an air traffic controller
2. To ensure safety ,I want to prevent landing when the airport is full

**Domain Modelling for User Story 3**

As an ATC i want to prevent landing when Airport is full

| **Object** | **Properties**                | **Message**     | **output** |
| ---------- | ----------------------------- | --------------- | ---------- |
| Airport    | capacity(@int) const or final | isAirportFull() | @boolean   |

**Run the File :**
Include the spec file to specRunner.js , and then run the code with node specRunner.js
```

## Domain Modelling

### User Story 4a

```
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
```

### User Story 4b

```
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
```

### User Story 5a and 5b

```
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
```

# Project Review and RoadMap

### My Learning and Takeaway from this Project..

```
My Learning Journey :
- Learn about javascript ,how to write a code with loops and conditional statement etc.
- Learn about the importance of Testing Framework to make a Error free Code.
- Learn about the Version Control System (github).
For Improvisation for this code :
- I have breakdown this code more in details.
- I might have written more test than right now.
- My Domain Model also will have more detailed structure.
- I have applied my knowledge of Encapsulation ,Single Responsiblities TDD framework in Project.
- I might have more cleaner code than right now.

```

### Where could this project go next?

```
 Airport Challange Enhanced Critetia

 - Landing and TakeOff criteria change depending on weather condition.
 - If there is a delay(more than 1 hour) in Landing or takeOff regardless of any reason ,Some kind of compensation
   is provided.
 - If there is cancellation then refurd is Provided.
```

### Acknowledgement

```
- Code Acadamy.
- W3School.
- Generic google search
- Array and String methods.
- Youtube videos on the topic.
- Mdn
```
