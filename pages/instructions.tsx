import React from "react";
import { Container } from "react-bootstrap";
import { FaCode, FaHeart } from "react-icons/fa";

export default function Instructions() {
  return (
    <Container className="py-5">
      <h1 className="text-center">How To Play</h1>
      <br />
      <p className="fs-5">
        The goal of Wordify is to guess a randomly selected five-letter word in
        as few tries and little time as possible. Wordify gives players six
        chances to guess the word and provides hint through the form of coloring
        after each guess. A green color means the right letter is in the right
        spot; a yellow color means a correct letter in the wrong spot; and a
        gray color means that the letter is not in the word in any spot. Only
        valid words are allowed.
      </p>
      <br />
      <p className="fs-5">
        To see what words we allow as guesses, please check out the following
        links:{" "}
        <a href="https://gist.github.com/cfreshman/a7b776506c73284511034e63af1017ee">
          link1
        </a>{" "}
        <a href="https://gist.github.com/cfreshman/40608e78e83eb4e1d60b285eb7e9732f">
          link2
        </a>
        .
      </p>
    </Container>
  );
}
