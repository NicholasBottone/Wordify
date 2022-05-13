export default function ProfileBoardBlock(guess: number) {
  if (guess == 0) {
    return "⬛️";
  } else if (guess == 1) {
    return "🟨";
  } else {
    return "🟩";
  }
}
