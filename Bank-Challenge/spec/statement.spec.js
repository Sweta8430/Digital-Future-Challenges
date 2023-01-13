import Statement from "../src/statement.js";
import Account from "../src/account.js";

describe("Testing the Statement : ", () => {
  let testAccount = new Account();
  it(`should call console.log as expected`, () => {
    const transList = testAccount.getListOfTransaction();
    const consoleSpy = spyOn(console, "log");
    Statement.print(transList);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
