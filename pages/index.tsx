import type { NextPage } from "next";
import Link from "next/link";
import { Button, Container, Image } from "react-bootstrap";
import React from "react";
import { login } from "../lib/hooks/auth";
import { useUser } from "../lib/hooks/auth";

const Home: NextPage = () => {
  const { user } = useUser();

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
      {user ? (
        <Link href="/game">
        <Button variant="light" size="lg">
          Play!
        </Button>
      </Link>
      ) : (
        <Link href="/game">
        <Button variant="light" size="lg">
          Play as Guest
        </Button>
      </Link>
      )}
      <br />
      <br />
      { user ? (
        <br />
      ) : (
        <Button variant="light" size="lg" onClick={login}>
          {" "}
          Log In{" "}
        </Button>
      )}
    </Container>
  );
};

export default Home;
