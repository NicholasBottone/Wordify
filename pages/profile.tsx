import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Link from "next/link";
import { FaExpand } from "react-icons/fa";
import { useUser, login } from "../lib/hooks/auth";
import Row from "../components/ProfileBoardRow";

export default function Profile() {
  const { user } = useUser();
  let todaysGuess: any = 0;
  let board: any;
  if (user) {
    todaysGuess = user?.pastGuesses[0];
  }
  if (!todaysGuess) {
    board = <h4> You have not played today&apos;s word </h4>;
  } else {
    // map used rows to appropriate squares
    board = (
      <div>
        {todaysGuess.map((row: any, idx) => {
          return (
            <div key={idx}>
              <h1>
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
              </h1>
            </div>
          );
        })}
        {/* fill with gray squares for unused rows */}
      </div>
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
            <h4>
              {user?.givenName} {user?.familyName}
            </h4>
            {user?.bio}
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
            <Container className="mt-5 d-grid gap-2">
              <div className="col-sm-6 text-center">
                <h2> Today&apos;s Board </h2>

                <h1 className="text-centered"></h1>
                {board}
              </div>
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
