import Statement from "./statement.js";

export default class Account {
  #totalBalance;
  #listOfTransactions;

  constructor() {
    this.#totalBalance = 0;
    this.#listOfTransactions = [];
  }
  getListOfTransaction() {
    return this.#listOfTransactions;
  }
  setListOfTransaction(transactionObject) {
    this.#listOfTransactions.unshift(transactionObject);
  }
  depositAndWithdraw(transactionObject) {
    this.setTotalBalance(
      transactionObject.getAmount(),
      transactionObject.getType()
    );
    transactionObject.setBalance(this.getTotalBalance());
    this.setListOfTransaction(transactionObject);
  }

  setTotalBalance(amount, type) {
    if (type === "deposit") {
      this.#totalBalance += amount;
    }
    if (type === "withdraw") {
      if (this.#totalBalance >= amount) {
        this.#totalBalance -= amount;
      } else {
        return "You don't have enough money to Withdraw";
      }
    }
  }
  getTotalBalance() {
    return this.#totalBalance;
  }
  // displayStatement() {
  //   //No need to create an instance of the class as it is static
  //   Statement.print(this.getListOfTransaction());
  // }
}
