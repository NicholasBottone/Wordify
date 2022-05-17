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
        Hi! We are students at Brown University that made this application as
        our final project for CSCI0320: Introduction to Software Engineering. We
        are a group that loves word games and wanted to make something that we
        and our fellow word game lovers could enjoy.
      </p>
      <br />
      <p className="fs-5">
        Wordify is a spinoff of one of the word games that have been trending
        lately. However, we noticed that there was a lack of community
        engagement so we set out to make our users feel more connected. Thus, we
        included a feature where you can see the global results of all people
        who played the puzzle for the day, a profile page where you can see a
        detailed analysis of your personal statistics, and a friends feature
        where you can search for and add users to see how well they have been
        doing on Wordify. Hope you enjoy!
      </p>
      <br />
      <p className="fs-5">
        For more information about the project, please visit our{" "}
        <a href="https://github.com/NicholasBottone/Wordify">
          GitHub repository
        </a>
        .
      </p>
    </Container>
  );
}
