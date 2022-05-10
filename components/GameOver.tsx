import { useContext } from "react";
import { GameContext } from "../pages/game";

export default function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(GameContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver!.guessedWord
          ? "You correctly guessed the word!"
          : "You failed!"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      <h1>Attempt: {currAttempt!.rowIndex + 1}</h1>
    </div>
  );
}
