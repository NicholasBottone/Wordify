import { useContext } from "react";
import { GameContext } from "../pages/game";

interface Props {
  value: string;
  disabled: boolean;
}

export default function Key({ value, disabled }: Props) {
  const { onEnter, onDelete, onLetter } = useContext(GameContext);
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
      className="key"
      id={disabled ? "disabledKey" : "defaultKey"}
      onClick={enterLetter}
    >
      {value}
    </div>
  );
}
