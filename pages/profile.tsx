import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Link from "next/link";
import { FaExpand } from "react-icons/fa";
import { useUser, login } from "../lib/hooks/auth";

export default function Profile() {
  const { user } = useUser();
<<<<<<< HEAD
  let todaysGuess: any = 0;
  let board: any;
  if (user) {
    todaysGuess = user?.pastGuesses[0];
  }
  if (!todaysGuess) {
    board = <h4> You have not played today's word </h4>;
  } else {
    // map used rows to appropriate squares
    board = (
      <div>
        {todaysGuess.map((row: any) => {
          return (
            <div>
              (
              <h4>
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
              </h4>
              <br />)
            </div>
          );
        })}
        {/* fill with gray squares for unused rows */}
      </div>
    );
  }

=======
<<<<<<< HEAD
  console.log(user);
  const todayGuess: any = user?.pastGuesses[0];
  console.log(todayGuess);
  // let { todayGuessOne }: any = Row(todayGuess[0]);
  // let { todayGuessTwo }: any = 0;
  // let { todayGuessThree }: any = 0;
  // let { todayGuessFour }: any = 0;
  // let { todayGuessFive }: any = 0;
  // let { todayGuessSix }: any = 0;
=======
>>>>>>> ac77a1b53b3a53d3733c6743f73651490604bf9f
>>>>>>> 7cce4221838f80d41c2bf9e07b6ef991bbfea647
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
            <h1 className="text-centered"></h1>
            {board}
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
