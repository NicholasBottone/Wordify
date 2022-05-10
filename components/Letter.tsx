import React, { useContext, useEffect } from "react";
import { GameContext } from "../pages/game";

interface Props {
  rowIndex: number;
  letterIndex: number;
}

export default function Letter({ rowIndex, letterIndex }: Props) {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(GameContext);
  const letter = board![rowIndex][letterIndex];
  const correct = letter === correctWord![letterIndex];
  const close = !correct && letter !== "" && correctWord!.includes(letter);

  var letterState = "default";
  if (currAttempt!.rowIndex > rowIndex) {
    console.log("Inside here");
    console.log(correct, close);
    letterState = correct ? "correct" : close ? "close" : "defaultGuess";
  }

  useEffect(() => {
    if (letter != "" && !correct && !close) {
      setDisabledLetters!((prev: string[]) => [...prev, letter]);
    }
  }, [letter, correct, close]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}
