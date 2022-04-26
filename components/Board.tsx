import React from "react";
import { boardDefault } from "../components/words";
import Letter from "./Letter";

export default function Board() {
  const [board, setBoard] = React.useState(boardDefault);
  return (
    <div className="board">
      {" "}
      <div className="row">
        <Letter rowIndex={0} letterIndex={0} />
        <Letter rowIndex={0} letterIndex={1} />
        <Letter rowIndex={0} letterIndex={2} />
        <Letter rowIndex={0} letterIndex={3} />
        <Letter rowIndex={0} letterIndex={4} />
      </div>
      <div className="row">
        <Letter rowIndex={1} letterIndex={0} />
        <Letter rowIndex={1} letterIndex={1} />
        <Letter rowIndex={1} letterIndex={2} />
        <Letter rowIndex={1} letterIndex={3} />
        <Letter rowIndex={1} letterIndex={4} />
      </div>
      <div className="row">
        <Letter rowIndex={2} letterIndex={0} />
        <Letter rowIndex={2} letterIndex={1} />
        <Letter rowIndex={2} letterIndex={2} />
        <Letter rowIndex={2} letterIndex={3} />
        <Letter rowIndex={2} letterIndex={4} />
      </div>
      <div className="row">
        <Letter rowIndex={3} letterIndex={0} />
        <Letter rowIndex={3} letterIndex={1} />
        <Letter rowIndex={3} letterIndex={2} />
        <Letter rowIndex={3} letterIndex={3} />
        <Letter rowIndex={3} letterIndex={4} />
      </div>
      <div className="row">
        <Letter rowIndex={4} letterIndex={0} />
        <Letter rowIndex={4} letterIndex={1} />
        <Letter rowIndex={4} letterIndex={2} />
        <Letter rowIndex={4} letterIndex={3} />
        <Letter rowIndex={4} letterIndex={4} />
      </div>
      <div className="row">
        <Letter rowIndex={5} letterIndex={0} />
        <Letter rowIndex={5} letterIndex={1} />
        <Letter rowIndex={5} letterIndex={2} />
        <Letter rowIndex={5} letterIndex={3} />
        <Letter rowIndex={5} letterIndex={4} />
      </div>
    </div>
  );
}
