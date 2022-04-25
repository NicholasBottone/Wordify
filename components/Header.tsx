import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/blueno.png"
              alt="Blueno logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Wordify
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
