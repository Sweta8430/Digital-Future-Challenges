import Account from "./src/account.js";
import Statement from "./src/statement.js";
import Transactions from "./src/transactions.js";

const testAccount = new Account();
const transaction1 = new Transactions(new Date(`01/10/2012`), 1000, `deposit`);
const transaction2 = new Transactions(new Date(`01/13/2012`), 2000, `deposit`);
const transaction3 = new Transactions(new Date(`01/14/2012`), 500, `withdraw`);

testAccount.depositAndWithdraw(transaction1);
testAccount.depositAndWithdraw(transaction2);
testAccount.depositAndWithdraw(transaction3);
const transList = testAccount.getListOfTransaction();
Statement.print(transList);
