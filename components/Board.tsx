import React from "react";
import Letter from "./Letter";

export default function Board() {
  return (
    <div className="board">
      {" "}
      <div id="gameRow">
        <Letter rowIndex={0} letterIndex={0} />
        <Letter rowIndex={0} letterIndex={1} />
        <Letter rowIndex={0} letterIndex={2} />
        <Letter rowIndex={0} letterIndex={3} />
        <Letter rowIndex={0} letterIndex={4} />
      </div>
      <div id="gameRow">
        <Letter rowIndex={1} letterIndex={0} />
        <Letter rowIndex={1} letterIndex={1} />
        <Letter rowIndex={1} letterIndex={2} />
        <Letter rowIndex={1} letterIndex={3} />
        <Letter rowIndex={1} letterIndex={4} />
      </div>
      <div id="gameRow">
        <Letter rowIndex={2} letterIndex={0} />
        <Letter rowIndex={2} letterIndex={1} />
        <Letter rowIndex={2} letterIndex={2} />
        <Letter rowIndex={2} letterIndex={3} />
        <Letter rowIndex={2} letterIndex={4} />
      </div>
      <div id="gameRow">
        <Letter rowIndex={3} letterIndex={0} />
        <Letter rowIndex={3} letterIndex={1} />
        <Letter rowIndex={3} letterIndex={2} />
        <Letter rowIndex={3} letterIndex={3} />
        <Letter rowIndex={3} letterIndex={4} />
      </div>
      <div id="gameRow">
        <Letter rowIndex={4} letterIndex={0} />
        <Letter rowIndex={4} letterIndex={1} />
        <Letter rowIndex={4} letterIndex={2} />
        <Letter rowIndex={4} letterIndex={3} />
        <Letter rowIndex={4} letterIndex={4} />
      </div>
      <div id="gameRow">
        <Letter rowIndex={5} letterIndex={0} />
        <Letter rowIndex={5} letterIndex={1} />
        <Letter rowIndex={5} letterIndex={2} />
        <Letter rowIndex={5} letterIndex={3} />
        <Letter rowIndex={5} letterIndex={4} />
      </div>
    </div>
  );
}
