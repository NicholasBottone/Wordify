import React, { useCallback, useEffect, useContext, useMemo } from "react";
import Key from "./Key";
import { GameContext } from "../pages/game";

export default function Keyboard() {
  const {
    onEnter,
    onDelete,
    onLetter,
    disabledLetters,
    correctLetters,
    closeLetters,
  } = useContext(GameContext);

  const keys1 = useMemo(
    () => ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    []
  );
  const keys2 = useMemo(
    () => ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    []
  );
  const keys3 = useMemo(() => ["Z", "X", "C", "V", "B", "N", "M"], []);
  const keys = useMemo(() => [keys1, keys2, keys3], [keys1, keys2, keys3]);

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
    [onEnter, onDelete, onLetter, keys]
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
              correct={correctLetters!.includes(key)}
              close={closeLetters!.includes(key)}
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
              correct={correctLetters!.includes(key)}
              close={closeLetters!.includes(key)}
              key={idx}
            />
          );
        })}
      </div>
      <div className="keysRow3">
        <Key value="ENTER" disabled={false} correct={false} close={false} />
        {keys3.map((key, idx) => {
          return (
            <Key
              value={key}
              disabled={disabledLetters!.includes(key)}
              correct={correctLetters!.includes(key)}
              close={closeLetters!.includes(key)}
              key={idx}
            />
          );
        })}
        <Key value="DELETE" disabled={false} correct={false} close={false} />
      </div>
    </div>
  );
}
