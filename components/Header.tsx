import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import { login, logout, useUser } from "../lib/hooks/auth";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Link href="/">
            <Navbar.Brand as="a" href="/">
              <Image
                src="/icon.png"
                alt="wordify icon"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Wordify
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/game">
                <Nav.Link as="a" href="/game">
                  Play
                </Nav.Link>
              </Link>
              <Link href="/daily-info">
                <Nav.Link as="a" href="/daily-info">
                  Today&apos;s Stats
                </Nav.Link>
              </Link>
              <Link href="/friends">
                <Nav.Link as="a" href="/friends">
                  Friends
                </Nav.Link>
              </Link>
              <Link href="/instructions">
                <Nav.Link as="a" href="/instructions">
                  How to Play
                </Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link as="a" href="/about">
                  About
                </Nav.Link>
              </Link>
              <Link href="/privacy">
                <Nav.Link as="a" href="/privacy">
                  Privacy Policy
                </Nav.Link>
              </Link>
              <Nav.Link href="https://github.com/NicholasBottone/Wordify">
                <FaGithub />
              </Nav.Link>
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
                  <Link href="/friends">
                    <NavDropdown.Item as="a" href="/friends">
                      Friends
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
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
