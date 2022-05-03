import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "../components/words";

export const GameContext = createContext();

function game() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    rowIndex: 0,
    letterIndex: 0,
  });
  const onEnter = () => {
    if (currAttempt.letterIndex != 5) return;
    setCurrAttempt({
      rowIndex: currAttempt.rowIndex + 1,
      letterIndex: 0,
    });
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
  const onLetter = (value) => {
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
          }}
        >
          <Board />
          <Keyboard />
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default game;
