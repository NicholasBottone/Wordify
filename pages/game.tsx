import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import GameOver from "../components/GameOver";
import { useDailyPuzzle, submitDailyPuzzleResult } from "../lib/hooks/puzzle";
import { useUser } from "../lib/hooks/auth";
import WordVerifier from "../lib/words/wordVerifier";
import Timer from "../components/Timer";

interface IContext {
  board: string[][];
  setBoard: (board: string[][]) => void;
  currAttempt: {
    rowIndex: number;
    letterIndex: number;
  };
  setCurrAttempt: (currAttempt: {
    rowIndex: number;
    letterIndex: number;
  }) => void;
  onEnter: () => void;
  onDelete: () => void;
  onLetter: (value: string) => void;
  correctWord: string;
  disabledLetters: string[];
  setDisabledLetters: Dispatch<SetStateAction<string[]>>;
  correctLetters: string[];
  setCorrectLetters: Dispatch<SetStateAction<string[]>>;
  closeLetters: string[];
  setCloseLetters: Dispatch<SetStateAction<string[]>>;
  gameOver: { gameOver: boolean; guessedWord: boolean };
  setGameOver: (gameOver: { gameOver: boolean; guessedWord: boolean }) => void;
}

export const GameContext = createContext<Partial<IContext>>({});

function Game() {
  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    rowIndex: 0,
    letterIndex: 0,
  });
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [closeLetters, setCloseLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  // get the daily puzzle from backend
  const {
    puzzle,
    error: puzzleError,
    isLoading: puzzleIsLoading,
  } = useDailyPuzzle();
  const { user, error: userError, isLoading: userIsLoading } = useUser();
  const correctWord = puzzle?.word.toUpperCase();

  // TODO: submit the time spent on the game when timer is implemented in seconds.
  useEffect(() => {
    if (!gameOver.gameOver || !puzzle || !correctWord || !user) {
      return;
    }

    // check if the user has played the game today
    if (!user?.pastGuesses[0]) {
      // they have not played
      const letterStates = board
        .map((row) =>
          row.map((letter, letterIndex) => {
            // if true, the letter will be green
            const correct = letter === correctWord[letterIndex];
            // if true, the letter will be yellow
            let close =
              !correct && letter !== "" && correctWord.includes(letter);

            // get the number of times letter shows up in guess.
            const count = row.filter((l) => l === letter).length;

            if (count > 1) {
              // get the indices of all of the letters inside guess that are the same as letter
              const guessIndices = row.reduce(
                (acc, l, i) => (l === letter ? [...acc, i] : acc),
                [] as number[]
              );
              // get the indices of all of the letters inside the correct word that are the same as letter
              const correctIndices = correctWord
                .split("")
                .reduce(
                  (acc, l, i) => (l === letter ? [...acc, i] : acc),
                  [] as number[]
                );

              // check whether the current guess covers all of the correct indices
              const coversAll = guessIndices.every((i) =>
                correctIndices.includes(i)
              );
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
            return correct ? 2 : close ? 1 : 0;
          })
        )
        .slice(0, currAttempt.rowIndex);
      // send the results to backend
      submitDailyPuzzleResult(letterStates, gameOver.guessedWord, 1);
    }
  }, [gameOver.gameOver]);

  // TODO: change the buttons on the home screen
  // check if the user is logged in
  if (!user) {
    return <h1>You must be logged in to play the game!</h1>;
  }

  // error check the loading of puzzle
  if (puzzleError) {
    return <div>{puzzleError}</div>;
  } else if (puzzleIsLoading) {
    return <div>Loading...</div>;
  }

  // error check the loading of user
  if (userError) {
    return <div>{userError}</div>;
  } else if (userIsLoading) {
    return <div>Loading...</div>;
  }

  // TODO: redirect to statistics page once merged.
  // check if user has already played the game today
  if (user?.pastGuesses[0]) {
    return <div>You have already played today!</div>;
  }

  // functions that interact with the game
  const onEnter = () => {
    // do not allow entering if there are not enough letters
    if (currAttempt.letterIndex != 5) return;

    const entry = board[currAttempt.rowIndex].join("").toLowerCase();

    // check if we should move onto the next row -> only if the word is a valid word
    if (WordVerifier(entry)) {
      setCurrAttempt({
        rowIndex: currAttempt.rowIndex + 1,
        letterIndex: 0,
      });
    }

    // check if the entry is correct. if so, end the game
    if (correctWord!.toLowerCase() === entry) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    // check if user reached maximum attempts
    if (currAttempt.rowIndex == 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };
  const onDelete = () => {
    if (currAttempt.letterIndex == 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.rowIndex][currAttempt.letterIndex - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterIndex: currAttempt.letterIndex - 1,
    });
  };
  const onLetter = (value: string) => {
    // Function should not execute if we reached the end of a row
    if (currAttempt.letterIndex > 4) {
      return;
    }
    const newBoard = [...board];
    newBoard[currAttempt.rowIndex][currAttempt.letterIndex] = value;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterIndex: currAttempt.letterIndex + 1,
    });
  };

  return (
    <div className="Game">
      <div className="board-container">
        <GameContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onEnter,
            onDelete,
            onLetter,
            correctWord,
            disabledLetters,
            setDisabledLetters,
            correctLetters,
            setCorrectLetters,
            closeLetters,
            setCloseLetters,
            gameOver,
            setGameOver,
          }}
        >
          <Timer />
          <Board />
          <br />
          <br />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default Game;
