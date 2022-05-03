import { useContext } from "react";
import { GameContext } from "../pages/game";

interface Props {
  value: string;
}

export default function Key({ value }: Props) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(GameContext);
  const enterLetter = () => {
    if (value === "ENTER") {
      if (currAttempt.letterIndex != 5) return;
      setCurrAttempt({
        rowIndex: currAttempt.rowIndex + 1,
        letterIndex: 0,
      });
    } else if (value === "DELETE") {
      if (currAttempt.letterIndex == 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.rowIndex][currAttempt.letterIndex - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterIndex: currAttempt.letterIndex - 1,
      });
    } else {
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
    }
  };
  return (
    <div className="key" onClick={enterLetter}>
      {value}
    </div>
  );
}
