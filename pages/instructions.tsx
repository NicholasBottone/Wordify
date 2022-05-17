import React from "react";
import { Container } from "react-bootstrap";

export default function Instructions() {
  return (
    <Container className="py-5">
      <h1 className="text-center">How To Play</h1>
      <br />
      <p className="fs-5">
        The goal of Wordify is to guess a randomly selected five-letter word in
        as few tries and little time as possible. Wordify gives players six
        chances to guess the secret word. The play is provided hints after each
        guess. A green square indicates that this letter is in the word and in
        the correct spot. A yellow square indicates that this letter is in the
        word but in the wrong spot. A gray square indicates that this letter is
        not in the word in any spot. For each of the six guesses, only valid
        English words are allowed.
      </p>
      <br />
      <p className="fs-5">
        The game is over when the player guesses the secret word or runs out of
        guesses. After finishing the game, be sure to share your results with
        your friends! Visit the friends page to see how well your friends did on
        today&apos;s puzzle, and visit the daily summary screen to see the
        global performance on today&apos;s puzzle. You can also view your own
        profile to see how well you have done historically.
      </p>
    </Container>
  );
}
