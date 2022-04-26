import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function game() {
    return (
        <Container>
            <h1>Hello, world!</h1>
            <Link href="/about">About</Link>
            <h1 class="text-centered">
                ⬜⬜⬜⬜⬜ <br></br>
                ⬜⬜⬜⬜⬜ <br></br>
                ⬜⬜⬜⬜⬜ <br></br>
                ⬜⬜⬜⬜⬜ <br></br>
                ⬜⬜⬜⬜⬜ <br></br>
            </h1>
            <h2 class="text-centered">
                Q W E R T Y U I O P <br></br>
                A S D F G H J K L <br></br>
                Z X C V B N M <br></br>
            </h2>
        </Container>
    );
}
