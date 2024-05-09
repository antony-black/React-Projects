import { useEffect, useRef, useState } from "react";
import Row from "./Row/Row";
import { winLines } from "../../constants/winLines";
import styles from "./TicTacToe.module.css";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setXTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleClick = (index) => {
    const copiedSquares = [...squares];
    if (copiedSquares[index]) return;
    copiedSquares[index] = isXTurn ? "X" : "0";
    setXTurn(!isXTurn);
    setSquares(copiedSquares);
  };

  const getWinner = (squares) => {
    for (let i = 0; i < winLines.length; i++) {
      const [x, y, z] = winLines[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const restart = () => {
    setSquares(Array(9).fill(""));
    setXTurn(true);
    setDisabled(false);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((sq) => sq !== "")) {
      setGameStatus("This is a draw! Restart the game and play again:)");
    } else if (getWinner(squares)) {
      setDisabled(true);
      // getWinLine();
      setGameStatus(`"${getWinner(squares)}" is a winner! Play again:)`);
    } else {
      setGameStatus(`Now is "${isXTurn ? "X" : "0"}" turn now`);
    }
  }, [squares, isXTurn]);

  return (
    <div className={styles.ticTacToe}>
      <div className={styles.rows}>
        <Row
          squares={squares}
          handleClick={handleClick}
          from={0}
          to={3}
          isDisabled={isDisabled}
        />
        <Row
          squares={squares}
          handleClick={handleClick}
          from={3}
          to={6}
          isDisabled={isDisabled}
        />
        <Row
          squares={squares}
          handleClick={handleClick}
          from={6}
          to={9}
          isDisabled={isDisabled}
        />
      </div>

      <h1>{gameStatus}</h1>
      <button className={styles.restart} onClick={restart}>
        Restart
      </button>
    </div>
  );
}
