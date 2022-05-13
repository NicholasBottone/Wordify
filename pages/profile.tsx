import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Link from "next/link";
import { FaExpand } from "react-icons/fa";
import { useUser, login } from "../lib/hooks/auth";

export default function Profile() {
  const { user } = useUser();
  if (user) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-center">
            <br />
            <br />
            <br />
            <br />
            <Image
              src={user?.profilePicture}
              alt="Profile picture"
              width="200"
              height="200"
              roundedCircle
            />
            <br />
            <br />
            <h4>
              {user?.givenName} {user?.familyName}
            </h4>
            {user?.bio}
            <br />
            <br />
            <Link href="/game">
              <Button variant="secondary" size="lg" className="">
                Real Word of the Day <FaExpand />
              </Button>
            </Link>{" "}
          </div>
          <div className="col-sm-6">
            <Container className="mt-5">
              <Link href="/profile">
                <Button variant="secondary" size="sm" className="">
                  Dashboard
                </Button>
              </Link>{" "}
              <Link href="/statistics">
                <Button variant="light" size="sm">
                  Statistics
                </Button>
              </Link>
            </Container>
            <Container className="mt-5 d-grid gap-2"></Container>
            <h1> Board </h1>
            <h1 className="text-centered">
              ⬜⬜⬜⬜⬜ <br />
              ⬜⬜⬜⬜⬜ <br />
              ⬜⬜⬜⬜⬜ <br />
              ⬜⬜⬜⬜⬜ <br />
              ⬜⬜⬜⬜⬜ <br />
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Container className="text-center">
      <br />
      <h4> Log in to access profile page!</h4>
      <br />
      <Button variant="light" size="lg" onClick={login}>
        {" "}
        Log In{" "}
      </Button>
    </Container>
  );
}
