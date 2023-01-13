import { expect } from "chai";
import Player from "../src/player.js";
import PlayerGame from "../src/playerGame.js";

describe("Checking the data on my Player Class", () => {
  const name = `testname`;
  const choice = `rock`;
  const player = new Player(name, choice);
  const playerGame = new PlayerGame();
  it("Checking the player's objects output is as expected", () => {
    expect(player).to.have.property(`name`);
    expect(player).to.have.property(`choice`);
    expect(player.name).to.have.a(`string`);
    expect(player.choice).to.have.a(`string`);
    expect(player.name).to.be.equals(`testname`);
    expect(player.choice).to.be.equals(`rock`);
  });
  it("Testing of an computer is returning one of the option[RPS] as expected", () => {
    const data = playerGame.computerChoice();
    expect(data).to.be.a(`string`);
    expect(data).to.be.oneOf(["rock", "paper", "scissor"]);
  });
  it("Testing if createPlayer is returning the name and choice of the player as expected ", () => {
    const data = playerGame.createPlayer(name, choice);
    expect(data).to.have.property(`name`);
    expect(data).to.have.property(`choice`);
    expect(data.name).to.have.a(`string`);
    expect(data.choice).to.have.a(`string`);
    expect(data.name).to.be.equals(`testname`);
    expect(data.choice).to.be.equals(`rock`);
  });
  it("Testing if gameResult is returning the result as expected ", () => {
    const result = playerGame.gameResult();
    expect(result).to.have.a(`string`);
    expect(result).to.contain.oneOf([
      "Whoohooo Its a tie!!",
      "Computer Wins!",
      "You Win!",
    ]);
  });
});
