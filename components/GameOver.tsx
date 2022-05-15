import { useRouter } from "next/router";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useUser } from "../lib/hooks/auth";
import { GameContext } from "../pages/game";

export default function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(GameContext);
  const { user } = useUser();
  const router = useRouter();
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
      <div>
        {!user ? (
          <Button variant="light" onClick={() => router.reload()}>
            Get a new word!
          </Button>
        ) : (
          <>
            <Button variant="light" onClick={() => router.push("/daily-info")}>
              See how others did!
            </Button>{" "}
            <Button variant="light" onClick={() => router.push("/friends")}>
              See how your friends did!
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
