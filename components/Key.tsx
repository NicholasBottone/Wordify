import { useContext } from "react";
import { GameContext } from "../pages/game";

interface Props {
  value: string;
}

export default function Key({ value }: Props) {
  const { onEnter, onDelete, onLetter } = useContext(GameContext);
  const enterLetter = () => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      onLetter(value);
    }
  };
  return (
    <div className="key" onClick={enterLetter}>
      {value}
    </div>
  );
}
