import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { GameContext } from "../pages/game";

export default function Keyboard() {
  const { onEnter, onDelete, onLetter, disabledLetters } =
    useContext(GameContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const keys = [keys1, keys2, keys3];

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "Enter") {
        onEnter!();
      } else if (key === "Backspace") {
        onDelete!();
      } else {
        keys.forEach((row) => {
          if (row.includes(key.toUpperCase())) {
            onLetter!(key.toUpperCase());
          }
        });
      }
    },
    [onEnter, onDelete, onLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    // FIXME: figure out type casting for keyboard event handler
    <div className="keyboard" onKeyDown={handleKeyDown as any}>
      <div className="keysRow1">
        {keys1.map((key, idx) => {
          return (
            <Key
              value={key}
              disabled={disabledLetters!.includes(key)}
              key={idx}
            />
          );
        })}
      </div>
      <div className="keysRow2">
        {keys2.map((key, idx) => {
          return (
            <Key
              value={key}
              disabled={disabledLetters!.includes(key)}
              key={idx}
            />
          );
        })}
      </div>
      <div className="keysRow3">
        <Key value="ENTER" disabled={false} />
        {keys3.map((key, idx) => {
          return (
            <Key
              value={key}
              disabled={disabledLetters!.includes(key)}
              key={idx}
            />
          );
        })}
        <Key value="DELETE" disabled={false} />
      </div>
    </div>
  );
}
