import express from "express";
import PlayerGame from "../src/playerGame.js";

export const router = express.Router();
router.post("/", (req, res) => {
  const playerGame = new PlayerGame();
  const name = req.app.locals.name;
  const choice = req.body.rps;
  const playerDetails = playerGame.createPlayer(name, choice);
  const computerChoice = playerGame.computerChoice();
  const result = playerGame.gameResult();

  res.render("result", {
    name: req.app.locals.name,
    choice: playerDetails.choice,
    compChoice: computerChoice,
    finalResult: result,
  });
});
