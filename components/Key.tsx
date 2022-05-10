import { useContext } from "react";
import { GameContext } from "../pages/game";

interface Props {
  value: string;
  disabled: boolean;
}

export default function Key({ value, disabled }: Props) {
  const { onEnter, onDelete, onLetter } = useContext(GameContext);
  let className = "key";
  if (value === "ENTER") {
    className += " enter";
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
  return (
    <div
      className={className}
      id={disabled ? "disabledKey" : "defaultKey"}
      onClick={enterLetter}
    >
      {value}
    </div>
  );
}
