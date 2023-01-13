import Account from "../src/account.js";

describe("Testin the Account Entries : ", () => {
  let testAccount, testTransaction1, testTransaction2, testTransaction3;
  beforeEach(() => {
    testAccount = new Account();
  });
  afterEach(() => {
    testAccount = undefined;
  });

  it("Total Balance should return 0 on Account", () => {
    // Assert
    expect(testAccount.getTotalBalance()).toBe(0);
  });
  // Test Spec for checking the 1st Transaction Entry.
  describe(`Testing Deposit and withdraw Criteria on the Account :-`, () => {
    // Creating the mockTransaction 1

    testTransaction1 = {
      date: "10/01/2012",
      amount: 1000,
      type: "deposit",
      getAmount: () => {
        return 1000;
      },
      getType: () => {
        return "deposit";
      },
      setBalance: () => {
        return testAccount.getTotalBalance();
      },
    };

    it(`Should Return an Empty Array when Account is Empty `, () => {
      //Act
      //Assert
      expect(testAccount.getListOfTransaction()).toHaveSize(0);
    });
    it(`Making an Entry of 1000 Pound on 10/01/2012 So my Array length should be 1 now. `, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      //Assert
      expect(testAccount.getListOfTransaction()).toHaveSize(1);
    });
    it(`Checking 1000 pound is credited into my Account `, () => {
      //Act
      const result = testTransaction1.getAmount();
      //Assert
      expect(result).toBe(1000);
    });
    it(`Checking total Balance should be 1000 pound after Credited in to my Account `, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      const result = testAccount.getTotalBalance();
      //Assert
      expect(result).toBe(1000);
    });
    it(`Using SpyOn  getAmount Function on getAmount `, () => {
      const transactionSpy = spyOn(testTransaction1, `getAmount`);
      // Act -
      testTransaction1.getAmount();
      // Assert
      expect(transactionSpy).toHaveBeenCalled();
    });

    //Test Specs for checking the 2nd Transaction Entry.
    // Creating the mockTransaction for entry 2
    testTransaction2 = {
      date: "13/01/2012",
      amount: 2000,
      type: "deposit",
      getAmount: () => {
        return 2000;
      },
      getType: () => {
        return "deposit";
      },
      setBalance: () => {
        return testAccount.getTotalBalance();
      },
    };
    it(`Making an Entry of 2000 Pound on 13/01/2012 So my Array length should be 2 now. `, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      testAccount.depositAndWithdraw(testTransaction2);
      //Assert
      expect(testAccount.getListOfTransaction()).toHaveSize(2);
    });
    it(`Checking 2000 pound is credited into my Account `, () => {
      //Act
      const result = testTransaction2.getAmount();
      //Assert
      expect(result).toBe(2000);
    });
    it(`Checking total Balance should be 3000 pound after Credited in to my Account`, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      testAccount.depositAndWithdraw(testTransaction2);
      const result = testAccount.getTotalBalance();
      //Assert
      expect(result).toBe(3000);
    });
    //Test Specs for checking the 3rd Transaction Entry.
    // Creating the mockTransaction for entry 3
    testTransaction3 = {
      date: "14/01/2012",
      amount: 500,
      type: "withdraw",
      getAmount: () => {
        return 500;
      },
      getType: () => {
        return "withdraw";
      },
      setBalance: () => {
        return testAccount.getTotalBalance();
      },
    };
    it(`Making an Entry of 500 Pound on 14/01/2012 So my Array length should be 3 now. `, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      testAccount.depositAndWithdraw(testTransaction2);
      testAccount.depositAndWithdraw(testTransaction3);
      //Assert
      expect(testAccount.getListOfTransaction()).toHaveSize(3);
    });
    it(`Checking 500 pound is debited from my Account `, () => {
      //Act
      const result = testTransaction3.getAmount();
      //Assert
      expect(result).toBe(500);
    });
    it(`Checking total Balance should be 2500 pound after withdrawing 500 from the Account`, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      testAccount.depositAndWithdraw(testTransaction2);
      testAccount.depositAndWithdraw(testTransaction3);
      const result = testAccount.getTotalBalance();
      //Assert
      expect(result).toBe(2500);
    });
    it(`Testing to withdraw more than account total Balance :`, () => {
      //Act
      testAccount.depositAndWithdraw(testTransaction1);
      testAccount.depositAndWithdraw(testTransaction2);
      testAccount.depositAndWithdraw(testTransaction3);
      const result = testAccount.setTotalBalance(3000, "withdraw");
      //Assert
      expect(result).toBe("You don't have enough money to Withdraw");
    });
  });
});
