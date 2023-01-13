import Computer from "./computer.js";
import RPSPlayer from "./player.js";

class PlayerGame {
  playerDetails = null;
  opponentChoice = "";
  result = "";
  createPlayer(name, choice) {
    return (this.playerDetails = new RPSPlayer(name, choice));
  }
  computerChoice() {
    let comp = new Computer();
    return (this.opponentChoice = comp.computerData());
  }

  gameResult() {
    if (
      this.playerDetails.choice === "rock" &&
      this.opponentChoice === "paper"
    ) {
      return (this.result = "Computer Wins!");
    }
    if (
      this.playerDetails.choice === "rock" &&
      this.opponentChoice === "scissor"
    ) {
      return (this.result = "You Win!");
    }
    if (
      this.playerDetails.choice === "paper" &&
      this.opponentChoice === "scissor"
    ) {
      return (this.result = "Computer Wins!");
    }
    if (
      this.playerDetails.choice === "paper" &&
      this.opponentChoice === "rock"
    ) {
      return (this.result = "You Win!");
    }
    if (
      this.playerDetails.choice === "scissor" &&
      this.opponentChoice === "paper"
    ) {
      return (this.result = "You Win!");
    }
    if (
      this.playerDetails.choice === "scissor" &&
      this.opponentChoice === "rock"
    ) {
      return (this.result = "Computer Wins!");
    }
    if (this.playerDetails.choice === this.opponentChoice) {
      return (this.result = "Whoohooo Its a tie!!");
    }
  }
}
export default PlayerGame;
