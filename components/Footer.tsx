import React from "react";
import { Container } from "react-bootstrap";
import { FaCode, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer fixed-bottom mt-auto py-3 bg-light text-center">
      <Container>
        <a
          href="https://github.com/NicholasBottone/Wordify"
          className="text-muted"
        >
          <FaCode /> with <FaHeart /> by Nicholas Bottone, Andrew Li, Robert
          Koch, Christine Jeong, Toshiki Kato, and James Park.
        </a>
      </Container>
    </footer>
  );
}
