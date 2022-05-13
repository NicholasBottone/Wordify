import { useContext, useEffect } from "react";
import { GameContext } from "../pages/game";
import { submitDailyPuzzleResult } from "../lib/hooks/puzzle";

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
      <h1>
        Attempt: {gameOver!.guessedWord ? currAttempt!.rowIndex : "X"} / 6
      </h1>
    </div>
  );
}
