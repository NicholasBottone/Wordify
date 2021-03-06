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
import { words } from "../lib/words/words";
import { Container, Row, Col } from "react-bootstrap";

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
let continueTimer = true;

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
  const [correctWord, setCorrectWord] = useState<string>("");
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

  // Game timer
  let [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver.gameOver) {
        setTimer((timer += 1));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [gameOver.gameOver]);

  // backend calls
  const { user, error: userError, isLoading: userIsLoading } = useUser();

  // get the daily puzzle from backend
  const {
    puzzle,
    error: puzzleError,
    isLoading: puzzleIsLoading,
  } = useDailyPuzzle();

  // determine correct word
  useEffect(() => {
    if (user && puzzle) {
      setCorrectWord(puzzle?.word.toUpperCase());
    } else {
      setCorrectWord(
        words[Math.floor(Math.random() * words?.length)].toUpperCase()
      );
    }
  }, [puzzle, user]);

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
    if (correctWord.toLowerCase() === entry) {
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

  // TODO: submit the time spent on the game when timer is implemented in seconds.
  useEffect(() => {
    if (!gameOver.gameOver || !puzzle || !correctWord || !user) {
      return;
    }

    // logged in mode
    // check if the user has played the game today
    if (!user?.pastGuesses[0]) {
      // they have not played
      // stop the timer and store the seconds
      continueTimer = false;
      const letterStates = board
        .map((row) =>
          row.map((letter, letterIndex) => {
            // if true, the letter will be green
            const correct = letter === correctWord[letterIndex];
            // if true, the letter will be yellow
            let close =
              !correct && letter !== "" && correctWord.includes(letter);

            // get the number of times letter shows up in guess.
            const count = row.filter((l) => l === letter)?.length;

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
      // TODO: add the time spent on the game to the daily puzzle
      // send the results to backend
      submitDailyPuzzleResult(letterStates, gameOver.guessedWord, timer);
    }
  }, [gameOver.gameOver]);

  // error check the loading of puzzle
  if (user && puzzleError) {
    return <div>There was an error loading the puzzle.</div>;
  } else if (puzzleIsLoading) {
    return <div>Puzzle is loading! Hang in there!</div>;
  }

  // error check the loading of user
  if (userIsLoading) {
    return <div>Loading... Hang in there!</div>;
  }

  // check if user has already played the game today. show their result board if they have
  if (user?.pastGuesses[0]) {
    const resultBoard = (
      <Container>
        {user.pastGuesses[0].map((row: any, idx: number) => {
          return (
            <Row className="justify-content-md-center" key={idx}>
              <Col className="boardResult">
                {row.map((cell: any) => {
                  if (cell == 2) {
                    return "????";
                  } else if (cell == 1) {
                    return "????";
                  } else {
                    return "??????";
                  }
                })}
              </Col>
            </Row>
          );
        })}
      </Container>
    );

    return (
      <Container className="mt-5 d-grid gap-2 text-center">
        <Row>
          <h1>You have already played today&apos;s Wordify puzzle!</h1>
        </Row>
        <Row>
          <h2> Your Wordify board for today </h2>
          {resultBoard}
        </Row>
        {user.pastTimes[0] && (
          <Row>
            <h3>Finished in {user.pastTimes[0]} seconds</h3>
          </Row>
        )}
      </Container>
    );
  }

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
          <div className="timer">{timer}</div>
          <br />
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
