# RPS Challenge

## Instructions

- Feel free to use google, your notes, books, etc. but work on your own
- If you refer to the solution of another coach or trainee, please put a link to that in your README
- If you have a partial solution, **still check in a partial solution**
- You must submit a pull request to this repo with your code by 9:30am Monday morning

## Task

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

- Forking this repo
- TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

- All tests passing
- High test coverage
- The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )

# Solution For the RPS Challenge

### Package dependencies

```
npm install
npm install ejs
npm i --location=global nodemon@latest
npm i dotenv
npm i --save express
```

### Testing Dependencies

```
npm i --save chai mocha chai-http
```

## Domain Modelling

### User Story 1

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game
```

**Domain Modelling for User Story 1**

As a DFAT member
I would like to register my name before starting the game.

| **Object** | **Properties**        | **Message**           | **output** |
| ---------- | --------------------- | --------------------- | ---------- |
| Player     | playersDetails@string | createPlayer(@string) | @String    |

```
Tests

1. Checking the player's objects output is as expected
2. Testing if createPlayer() is returning the name and choice of the player as expected

```

### User Story 2

**Domain Modelling for User Story 2**

```
As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors

```

**Domain Modelling for User Story 2**

As a DFAT member
I would like to play Rock Paper Scissor

| **Object** | **Properties**        | **Message**           | **output** |
| ---------- | --------------------- | --------------------- | ---------- |
| Computer   | options@Array         | computerData(@string) | @String    |
| PlayerGame | result@string         | gameResult()          | @String    |
| PlayerGame | opponentChoice@string | computerChoice()      | @String    |

```
Tests

1. Testing of an computerData() is returning one of the option[RPS] as expected
2. Testing if gameResult() is returning the result as expected.
3. Testing computer choice is valid option.
4. Testing computer should generate the correct arrayof [RPS]

```

### Testing on my routes

### homeRouter.js

```
1. Checking the request made successful on Home Page `/`(GET Request).
- Response Status should be 200.
- It should generate HTML page.
```

### indexRouter.js

```
1. Checking the request made successful on index Page `/`(GET Request).
- Response Status should be 200.
- It should generate HTML page.
```

### gameRouter.js

```
1. Checking the request made successful on /game (GET)
    - Response Status should be 200.
    - It should generate HTML page.
    - Respose.text should matched the text with rendered HTML
2. Checking the request made successful on /game (POST)
    - Response Status should be 200.
```

### resultRouter.js

```
1. Checking the response is sucessful after /result(POST) request
    - Response Status should be 200.
    - It should generate HTML page.
    - Respose.text should matched the text with rendered HTML

```

# Project Review and RoadMap

### My Learning and Takeaway from this Project..

```
My Learning Journey :

- Learned the server side application with the help of ejs.
- Got to learn about the ejs new framework for server side application.
- Testing is getting easier with Mocha,Chai,Chai-http.
- Learned about the response and request made from the HTTP methods.
For Improvisation for this code :

-  Hope i have implemented the Extended criteria.
```
