import React from "react";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

export default function game() {
  return (
    <div className="Game">
      <div className="board-container">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}
