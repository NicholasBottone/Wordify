import type { NextPage } from "next";
import Link from "next/link";
import { Button, Container, Image } from "react-bootstrap";
import React from "react";
import { login, useUser } from "../lib/hooks/auth";

const Home: NextPage = () => {
  const { user } = useUser();

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
      {user ? (
        <Link href="/game">
          <Button variant="light" size="lg" className="homescreen-button">
            Play!
          </Button>
        </Link>
      ) : (
        <Link href="/game">
          <Button variant="light" size="lg" className="homescreen-button">
            Play as Guest
          </Button>
        </Link>
      )}
      <br />
      <br />
      {user ? (
        <Link href="/profile">
          <Button variant="light" size="lg" className="homescreen-button">
            Profile
          </Button>
        </Link>
      ) : (
        <Button
          variant="light"
          size="lg"
          onClick={login}
          className="homescreen-button"
        >
          Log In
        </Button>
      )}
    </Container>
  );
};

export default Home;
