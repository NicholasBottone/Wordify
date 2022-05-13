export default function ProfileBoardBlock(guess: number) {
  if (guess == 0) {
    return <p>⬛️</p>;
  } else if (guess == 1) {
    return <p>🟨</p>;
  } else {
    return <p>🟩</p>;
  }
}
