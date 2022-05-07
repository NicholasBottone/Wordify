import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import { login, logout, useUser } from "../lib/hooks/auth";

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link href="/">
            <Navbar.Brand as="a" href="/">
              <Image
                src="/blueno.png"
                alt="Blueno logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Wordify
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Link href="/">
                <Nav.Link as="a" href="/">
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link as="a" href="/about">
                  About
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className="justify-content-end">
              {user ? (
                <NavDropdown
                  title={
                    <span>
                      {user.name}{" "}
                      <Image
                        src={user.profilePicture}
                        alt="Profile picture"
                        width="30"
                        height="30"
                        roundedCircle
                      />
                    </span>
                  }
                >
                  <Link href="/profile">
                    <NavDropdown.Item as="a" href="/profile">
                      Profile
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link onClick={login}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
