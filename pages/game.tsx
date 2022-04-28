import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Game() {
  return (
    <Container className="text-center">
      <h1>Hello, world!</h1>
      <Link href="/about">About</Link>
      <h1 className="text-centered">
        ⬜⬜⬜⬜⬜ <br />
        ⬜⬜⬜⬜⬜ <br />
        ⬜⬜⬜⬜⬜ <br />
        ⬜⬜⬜⬜⬜ <br />
        ⬜⬜⬜⬜⬜ <br />
      </h1>
      <h2 className="text-centered">
        Q W E R T Y U I O P <br />A S D F G H J K L <br />Z X C V B N M <br />
      </h2>
    </Container>
  );
}
