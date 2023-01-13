# Bank Challenge

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, credit or debit amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

#### Standard

- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

## About This Project

### Project Name : - Bank Challenge

```
This Project gives you the understanding of Single Responsibilities,Decoupling,Encapsulation.
It can also gives you an idea about mock and spyon functionality.
This Project has been created in jasmine Environment so you can learn about the setup and run the files in the same.
In the Spec folder in TDD (Test Driven Development) I have written the test with Test Suite.
```

## Pre-Requisite and Installation

1. Fork the bank challange to your local Repo
2. Clone it in to your local Directory
3. Install Package.json and jasmine to your Folder.

```
Command to setup Jasmine
npm init
npm i --save-dev jasmine
create a .gitignore file to your Root Directory and include **/node_modules/ in it.
npm jasmine init

and then go into your json file add "type" : "module"

create index.js file and create src folder.

src folder files are :-
account.js
statement.js
teasactions.js

spec folder files are :-
account.spec.js
statement.spec.js
trasactions.spec.js
```

# Solution For the Bank Challenge

## User Stories

```
As a client
I want to make a deposit of £1000 on 10-01-2012
So that it can be stored in my account
and available to See.

As a client
I want to deposit £2000 on 13-01-2012
So that it can be stored in my account
and available to See.

As a client
I want to withdraw £500 on 14-01-2012
So that it can be stored in my account
and available to see.

As a client i am able to see all my transactions on my statement
so i can see all my account activity.

```

### User Strory 1 / User Story 2

```
As a client
I can deposit of £1000 on 10-01-2012
So that i can add the deposit amount
to my account balance.

As a client
I can deposit £2000 on 13-01-2012
So that i can add the deposit amount
to my account balance.

```

### Domain Model

| Objects      | Properties              | Messages                            | Output    |
| ------------ | ----------------------- | ----------------------------------- | --------- |
| Account      | totalBalance(@int)      | getTotalBalance()                   | @interger |
|              |                         | setToalBalance(@amt,@type)          | @Void     |
|              | listOfTransaction@Array | setListOfTransaction(@Transactions) | @Array    |
|              | [transaction]           | getListOfTransaction()              | @Array    |
|              |                         | depositAndWithdraw(@Transactions)   | @void     |
| Transactions | date                    | getDate()                           | @date     |
|              | type                    | getType()                           | @String   |
|              | amount                  | getAmount                           | @integer  |
|              | balance                 | getBalance()                        | @integer  |
|              |                         | setBalance(@amt)                    | @interger |

### Tests for User Story 1

1. Test to see if My balance is 0 before deposit any amount to my account.
2. Test After doing a transaction my listOfTransaction@Array has return a length 1.
3. Test that the actual transaction entry is in the listOfTransaction@Array after it has been added.
4. Test is the 1000 is credited as expected.
5. Test is the Total Balance of the Account is as Expected.
6. Test that calling `Trasactions` with an `Amount` and returns the expected amount of the transaction.
7. Test that calling `Trasactions` with a `Date` and returns the expected Date of the transaction
8. Test that calling `Trasactions` with an `type` and returns the expected type of the transaction.

### Tests for User Story 2

1. Test to check Array length has return 2 as Expected.
2. Test after doing the transaction the account has been credited by 2000 Pound.
3. Test to check the Account balance is 3000 as expected.

### User Strory 3

```

As a client
I want to withdraw £500 on 14-01-2012
So that i can take away the withdraw amount
from my account balance

```

### Domain Model

| Objects      | Properties              | Messages                            | Output    |
| ------------ | ----------------------- | ----------------------------------- | --------- |
| Account      | totalBalance(@int)      | getTotalBalance()                   | @interger |
|              |                         | setToalBalance(@amt,@type)          | @Void     |
|              | listOfTransaction@Array | setListOfTransaction(@Transactions) | @Array    |
|              | [transaction]           | getListOfTransaction()              | @Array    |
|              |                         | depositAndWithdraw(@Transactions)   | @void     |
| Transactions | date                    | getDate()                           | @date     |
|              | type                    | getType()                           | @String   |
|              | amount                  | getAmount                           | @integer  |
|              | balance                 | getBalance()                        | @integer  |
|              |                         | setBalance(@amt)                    | @interger |

### Tests for User Story 3

1. Test to check Array length has return 3 as Expected.
2. Test after doing the transaction the account has been debited by 500 Pound.
3. Test to check the Account balance is 2500 as expected.
4. Test to withdraw more than Account balance should throw an Error "You don't have enough money to Withdraw".

### User Strory 4

```
As a client
i am able to see all my transactions on my statement,
so i can see all my account activity.
```

### Domain Model

| Objects      | Properties              | Messages                                  | Output    |
| ------------ | ----------------------- | ----------------------------------------- | --------- |
| Account      | totalBalance(@int)      | getTotalBalance()                         | @interger |
|              |                         | setToalBalance(@amt,@type)                | @Void     |
|              | listOfTransaction@Array | setListOfTransaction(@Transactions)       | @Array    |
|              | [transaction]           | getListOfTransaction()                    | @Array    |
|              |                         | depositAndWithdraw(@Transactions)         | @void     |
|              |                         | displayStatement()(@getListOfTransaction) |           |
| Transactions | date                    | getDate()                                 | @date     |
|              | type                    | getType()                                 | @String   |
|              | amount                  | getAmount                                 | @integer  |
|              | balance                 | getBalance()                              | @integer  |
|              |                         | setBalance(@amt)                          | @interger |
| Statement    |                         | print(@Transactions)                      |           |

### Tests for User Story 4

1. console.log has been called on my Print() Statement.

# Project Review and RoadMap

### My Learning and Takeaway from this Project..

```
My Learning Journey :
- Learn Encapsulation,Decoupling,Single Responsiblities and TDD Framework in forms of Test Suits.
- Learn about the importance of Testing Framework to make a Error free Code.
- Learn about the Version Control System (github).

For Improvisation for this code :
- Give an amount value from console.
- Generate the ouput automated rather than all manual or hardcoded.

```

### Where could this project go next?

```
 Bank Challange Enhanced Critetia

 - Do this challange in Java.
 - May be give an input of Amount from console.
 - Instead of console output ,could use the html and css for better look.
```

### Acknowledgement

```
- Code Acadamy.
- W3School.
- Generic google search
- jasmin docs
- Youtube videos on the topic.
- Mdn
- google on mock topics
```
