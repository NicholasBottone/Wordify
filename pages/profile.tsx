import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import { useUser, login } from "../lib/hooks/auth";

export default function Profile() {
  const { user } = useUser();
  let todaysGuess: number[][] | null = null;
  let board: any;
  if (user) {
    todaysGuess = user?.pastGuesses[0];
  }
  if (!todaysGuess) {
    board = <h4> You have not played today&apos;s word </h4>;
  } else {
    // map used rows to appropriate squares
    board = (
      <Container>
        {todaysGuess.map((row: any, idx: number) => {
          return (
            <Row className="justify-content-md-center" key={idx}>
              <Col className="boardResult">
                {" "}
                {row.map((cell: any) => {
                  if (cell == 2) {
                    return "🟩";
                  } else if (cell == 1) {
                    return "🟨";
                  } else {
                    return "⬛️";
                  }
                })}
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }

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
            <h4>{user?.name}</h4>
            {user?.bio}
          </div>
          <div className="col-sm-6">
            <Container className="mt-5 text-center">
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
            <Container className="mt-5 d-grid gap-2 text-center">
              <Row>
                <h2>Today&apos;s Board</h2>
                {board}
                <br />
                {user.pastTimes[0] && (
                  <Row>
                    <h3>Finished in {user.pastTimes[0]} seconds</h3>
                  </Row>
                )}
              </Row>
            </Container>
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
