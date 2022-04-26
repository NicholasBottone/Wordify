import type { NextPage } from "next";
import Link from "next/link";
import {Container, Image} from "react-bootstrap";
import React from "react";

const Home: NextPage = () => {
  return (
    <Container>
      <Image
          src="/blueno.png"
          alt="Blueno logo"
          width="300"
          height="300"
          className="d-inline-block align-top"
      />
      <h1>Wordify</h1>
        <a href="/game" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Play As Guest</a>
        <br></br>
        <a href="/#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Log In</a>
    </Container>
  );
};

export default Home;
