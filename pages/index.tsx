import type { NextPage } from "next";
import Link from "next/link";
import { Button, Container, Image } from "react-bootstrap";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container className="text-center">
      <Image
        src="/wordify-logo.png"
        alt="Wordify Logo"
        fluid
        className="d-inline-block align-top logo"
      />
      <br />
      <br />
      <Link href="/game">
        <Button variant="light" size="lg" className="homescreen-button">
          Play As Guest
        </Button>
      </Link>
      <br />
      <Link href="/#">
        <Button variant="light" size="lg" className="homescreen-button">
          Log In
        </Button>
      </Link>
      <br />
      <Link href="/profile">
        <Button variant="light" size="lg" className="homescreen-button">
          Profile
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
