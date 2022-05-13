/* eslint-disable react-hooks/exhaustive-deps */
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
  const guess = board![rowIndex];
  const letter = guess[letterIndex];
  // if true, the letter will be green
  const correct = letter === correctWord![letterIndex];
  // if true, the letter will be yellow
  let close = !correct && letter !== "" && correctWord!.includes(letter);

  // get the number of times letter shows up in guess.
  const count = guess.filter((l) => l === letter).length;

  if (count > 1) {
    // get the indices of all of the letters inside guess that are the same as letter
    const guessIndices = guess.reduce(
      (acc, l, i) => (l === letter ? [...acc, i] : acc),
      [] as number[]
    );
    // get the indices of all of the letters inside the correct word that are the same as letter
    const correctIndices = correctWord!
      .split("")
      .reduce(
        (acc, l, i) => (l === letter ? [...acc, i] : acc),
        [] as number[]
      );

    // check whether the current guess covers all of the correct indices
    const coversAll = guessIndices.every((i) => correctIndices.includes(i));
    if (coversAll) {
      // check whether the current letter index is in the correct indices
      if (!correctIndices.includes(letterIndex)) {
        close = false;
      }
    } else {
      // get the number of yellow tiles that should appear (number of correct indices not covered by guess)
      const numYellow = correctIndices.filter(
        (i) => !guessIndices.includes(i)
      ).length;
      // create a subset of the guess indices that includes only indices that are not found in the correct indices
      const uncoveredIndices = guessIndices.filter(
        (i) => !correctIndices.includes(i)
      );
      // get the first numYellow indices from the uncovered indices
      const yellowIndices = uncoveredIndices.slice(0, numYellow);
      // if the current letter index is found in the yellow indices, set it to yellow
      if (yellowIndices.includes(letterIndex)) {
        close = true;
      } else {
        close = false;
      }
    }
  }

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
