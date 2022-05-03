import React, { useContext } from "react";
import { GameContext } from "../pages/game";

interface Props {
  rowIndex: number;
  letterIndex: number;
}

export default function Letter({ rowIndex, letterIndex }: Props) {
  const { board } = useContext(GameContext);
  const letter = board[rowIndex][letterIndex];
  return <div className="letter">{letter}</div>;
}
