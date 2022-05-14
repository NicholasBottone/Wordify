import React from "react";
import { Container } from "react-bootstrap";
import { FaCode, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center">Welcome to Wordify!</h1>
      <br />
      <h4 className="text-center">
        <a
          href="https://github.com/NicholasBottone/Wordify"
          className="text-muted"
        >
          <FaCode /> with <FaHeart /> by Nicholas Bottone, Andrew Li, Robert
          Koch, Christine Jeong, Toshiki Kato, and James Park.
        </a>
      </h4>
      <br />
      <p className="fs-5">
        Hi! We are Nick, Robert, James, Christine, Andrew, and Toshi! We are
        students at Brown University who made this project as our final for
        CSCI0320: Introduction to Software Engineering. We are a group who loves
        word games and wanted to make something that us and our fellow word game
        lovers could enjoy.
      </p>
      <br />
      <p className="fs-5">
        This is a spinoff of one of the word games that have been trending
        lately. However, we wanted our users to be more connected. Thus, we also
        included a feature where you can see the results of all people who
        played the puzzle for the day! We also added a profile page where you
        can see a more detailed analysis of your game play statistics. We hope
        you enjoy!
      </p>
    </Container>
  );
}
