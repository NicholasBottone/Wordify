import type { NextPage } from "next";
import Link from "next/link";
import { Button, Container, Image } from "react-bootstrap";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container className="text-center">
      <Image
        src="/blueno.png"
        alt="Blueno logo"
        width="300"
        height="300"
        className="d-inline-block align-top"
      />
      <h1>Wordify</h1>
      <Link href="/game">
        <Button variant="light" size="lg">
          Play As Guest
        </Button>
      </Link>
      <br />
      <Link href="/#">
        <Button variant="light" size="lg">
          Log In
        </Button>
      </Link>
      <br />
      <Link href="/profile">
        <Button variant="light" size="lg">
          Profile
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
