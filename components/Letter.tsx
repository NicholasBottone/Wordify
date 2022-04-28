import React from "react";

interface Props {
  rowIndex: number;
  letterIndex: number;
}

export default function Letter({ rowIndex, letterIndex }: Props) {
  return <div className="letter">A</div>;
}
