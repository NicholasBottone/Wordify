import React, { useContext, useEffect } from "react";
import { GameContext } from "../pages/game";

interface Props {
  rowIndex: number;
  letterIndex: number;
}

export default function Letter({ rowIndex, letterIndex }: Props) {
  const {
    board,
    correctWord,
    currAttempt,
    setDisabledLetters,
    setCorrectLetters,
    setCloseLetters,
  } = useContext(GameContext);
  const letter = board![rowIndex][letterIndex];
  const correct = letter === correctWord![letterIndex];
  const close = !correct && letter !== "" && correctWord!.includes(letter);

  var letterState = "default";
  if (currAttempt!.rowIndex > rowIndex) {
    letterState = correct ? "correct" : close ? "close" : "defaultGuess";
  }

  useEffect(() => {
    if (letter != "") {
      if (correct) {
        setCorrectLetters!((prev) => [...prev, letter]);
      } else if (close) {
        setCloseLetters!((prev) => [...prev, letter]);
      } else {
        setDisabledLetters!((prev: string[]) => [...prev, letter]);
      }
    }
  }, [currAttempt?.rowIndex]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}
