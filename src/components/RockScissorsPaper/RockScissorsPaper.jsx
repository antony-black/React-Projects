import { useEffect, useState } from "react";
import { randomChoice } from "../../constants/randomChoice";
import styles from "./RockScissorsPaper.module.css";

export default function RockScissorsPaper() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [gameStatus, setGameStatus] = useState("");

  const winningConditionals = {
    rock: { beats: "scissors" },
    scissors: { beats: "paper" },
    paper: { beats: "rock" },
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  const handleClick = (value) => {
    setPlayerChoice(value);
    setComputerChoice(randomChoice[getRandomNumber()]);
  };

  const handleReset = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setGameStatus("");
    setResult("");
  };

  const getWinner = (player, computer) => {
    if (player === computer) {
      return "This is a draw! Please, restart the game:)";
    } else if (
      winningConditionals[player.toLowerCase()].beats === computer.toLowerCase()
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      setResult(`${playerChoice} vs ${computerChoice}`);
      setGameStatus(getWinner(playerChoice, computerChoice));
    }
  }, [playerChoice, computerChoice]);

  return (
    <div className={styles.rockScissorsPaper}>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={() => handleClick("ROCK")}>
          ROCK
        </button>
        <button className={styles.btn} onClick={() => handleClick("SCISSORS")}>
          SCISSORS
        </button>
        <button className={styles.btn} onClick={() => handleClick("PAPER")}>
          PAPER
        </button>
      </div>
      <h2>{result}</h2>
      <h2>{gameStatus}</h2>
      {gameStatus && (
        <button
          className={`${styles.btn} ${styles.reset}`}
          onClick={handleReset}
        >
          RESET
        </button>
      )}
    </div>
  );
}
