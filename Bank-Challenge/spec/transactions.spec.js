import Transactions from "../src/transactions.js";

describe("Transaction Tests:-", () => {
  let testTrans;
  beforeEach(() => {
    testTrans = new Transactions(new Date(`10 / 01 / 2012`), 1000, `deposit`);
  });
  afterEach(() => {
    testTrans = undefined;
  });
  it("should return the amount of the Transaction", () => {
    const testAmt = 1000;
    expect(testTrans.getAmount()).toBe(testAmt);
  });
  it("should return the type of the Transaction", () => {
    const testType = "deposit";
    expect(testTrans.getType()).toBe(testType);
  });
  it("should return the Date of the Transaction", () => {
    const testDate = new Date(`10 / 01 / 2012`);
    expect(testTrans.getDate()).toEqual(testDate);
  });
  it("should return initial Balance of the Transaction", () => {
    expect(testTrans.getBalance()).toBe(0);
  });
});
