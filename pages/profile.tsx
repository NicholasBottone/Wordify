import React from "react";
import { Button, Container, ProgressBar, Image } from "react-bootstrap";
import Link from "next/link";
import { FaExpand } from "react-icons/fa";
import { useUser } from "../lib/hooks/auth";
import { login } from "../lib/hooks/auth";
import game from "./game";
import Row from "../components/ProfileBoardRow"
import { getImageSize } from "next/dist/server/image-optimizer";

export default function Profile() {
  const { user } = useUser();
  // console.log(user);
  // const todayGuess: [Number, Number, Number, Number, Number] = user?.pastGuesses[user?.pastGuesses.length - 1];
  // console.log(todayGuess);
  // let { todayGuessOne }: any = Row(todayGuess[0]);
  // let { todayGuessTwo }: any = 0;
  // let { todayGuessThree }: any = 0;
  // let { todayGuessFour }: any = 0;
  // let { todayGuessFive }: any = 0;
  // let { todayGuessSix }: any = 0;
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
  )
}
