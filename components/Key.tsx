import { useContext } from "react";
import { FaBackspace } from "react-icons/fa";
import { GameContext } from "../pages/game";

interface Props {
  value: string;
  disabled: boolean;
  correct: boolean;
  close: boolean;
}

export default function Key({ value, disabled, correct, close }: Props) {
  const { onEnter, onDelete, onLetter } = useContext(GameContext);
  let className = "key";
  if (value === "ENTER") {
    className += " enter";
  }
  if (value === "DELETE") {
    className += " delete";
  }

  const enterLetter = () => {
    if (value === "ENTER") {
      onEnter!();
    } else if (value === "DELETE") {
      onDelete!();
    } else {
      onLetter!(value);
    }
  };

  // Adjust disabled, correct, and close values
  if (close) {
    disabled = false;
    correct = false;
  } else if (correct) {
    disabled = false;
  }

  return (
    <div
      className={className}
      id={
        disabled
          ? "disabledKey"
          : correct
          ? "correctKey"
          : close
          ? "closeKey"
          : "defaultKey"
      }
      onClick={enterLetter}
    >
      {value === "DELETE" ? <FaBackspace /> : value}
    </div>
  );
}
