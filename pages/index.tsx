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
      <Button variant="secondary" size="lg">
        Play
      </Button>
      <Link href="/game">
        <Button variant="secondary" size="lg">
          Play As Guest
        </Button>
      </Link>
      <br />
      <Link href="/#">
        <Button variant="secondary" size="lg">
          Log In
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
