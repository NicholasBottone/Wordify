import React from "react";
import Key from "./Key";

export default function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="keysRow1">
        {keys1.map((key, _) => {
          return <Key value={key} />;
        })}
      </div>
      <div className="keysRow2">
        {keys2.map((key, _) => {
          return <Key value={key} />;
        })}
      </div>
      <div className="keysRow3">
        <Key value="ENTER" />
        {keys3.map((key, _) => {
          return <Key value={key} />;
        })}
        <Key value="DELETE" />
      </div>
      Keyboard
    </div>
  );
}
