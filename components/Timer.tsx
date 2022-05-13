import React from "react";

export default function Timer() {
  // Create a timer that counts up every second regardless of the state of the game
  var [timer, setTimer] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer += 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="timer">{timer}</div>;
}
