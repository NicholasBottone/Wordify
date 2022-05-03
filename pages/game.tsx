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

  return (
    <div className="Game">
      <div className="board-container">
        <GameContext.Provider
          value={{ board, setBoard, currAttempt, setCurrAttempt }}
        >
          <Board />
          <Keyboard />
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default game;
