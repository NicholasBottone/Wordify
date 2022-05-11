import { useContext, useEffect } from "react";
import { GameContext } from "../pages/game";
import { submitDailyPuzzleResult } from "../lib/hooks/puzzle";

export default function GameOver() {
  const { board, gameOver, currAttempt, correctWord } = useContext(GameContext);

  // map each letter inside board to 0 if it is correct, 1 if it is close, 2 if it is wrong
  const letterStates = board!
    .map((row) =>
      row.map((letter, letterIndex) => {
        const correct = letter === correctWord![letterIndex];
        const close =
          !correct && letter !== "" && correctWord!.includes(letter);
        return correct ? 2 : close ? 1 : 0;
      })
    )
    .slice(0, currAttempt!.rowIndex);

  // TODO: submit the time spent on the game when timer is implemented in seconds.
  useEffect(() => {
    submitDailyPuzzleResult(letterStates, gameOver!.guessedWord, 1);
  }, []);

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
