export default class Transactions {
  #date;
  #amount;
  #type;
  #balance = 0;
  constructor(date, amount, type) {
    this.#date = date;
    this.#amount = amount;
    this.#type = type;
    this.#balance = 0;
  }
  getDate() {
    return this.#date;
  }
  getAmount() {
    return this.#amount;
  }
  getType() {
    return this.#type;
  }
  setBalance(amount) {
    this.#balance = amount;
  }
  getBalance() {
    return this.#balance;
  }
}
