class Computer {
  options = ["rock", "paper", "scissor"];
  computerData() {
    const random = Math.floor(Math.random() * this.options.length);
    return this.options[random];
  }
}
export default Computer;
