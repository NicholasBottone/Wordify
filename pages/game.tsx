import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { boardDefault, words } from "../components/words";
import GameOver from "../components/GameOver";
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
  gameOver: { gameOver: boolean; guessedWord: boolean };
  setGameOver: (gameOver: { gameOver: boolean; guessedWord: boolean }) => void;
}

export const GameContext = createContext<Partial<IContext>>({});

function game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    rowIndex: 0,
    letterIndex: 0,
  });
  const correctWord = "RIGHT";
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const onEnter = () => {
    // do not allow entering if there are not enough letters
    if (currAttempt.letterIndex != 5) return;

    const entry = board[currAttempt.rowIndex].join("").toLowerCase();

    // check if we should move onto the next row -> only if the word is a valid word
    if (words.includes(entry)) {
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
            gameOver,
            setGameOver,
          }}
        >
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default game;
