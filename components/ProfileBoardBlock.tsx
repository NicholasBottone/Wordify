export default function Block(guess: Number) {
    if (guess == 0) {
        return (<p>⬛️</p>)
    } else if (guess == 1) {
        return (<p>🟨</p>)
    } else {
        return (<p>🟩</p>)
    }
  }