import React from "react";
import { Button, Container, ProgressBar, Image } from "react-bootstrap";
import Link from "next/link";
import { useUser } from "../lib/hooks/auth";
import { FaExpand } from "react-icons/fa";

export default function Profile() {
  const { user } = useUser();
  const { gamesWon }: any | undefined = user?.gamesWon;
  const { gamesPlayed }: any | undefined = user?.gamesPlayed;
  const { winPercentage }: any | undefined = (gamesWon / gamesPlayed) * 100;
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
            className="d-inline-block"
            roundedCircle
          />
          <br />
          <br />
          <h4>
            {user?.givenName} {user?.familyName}
          </h4>
          <br />
          <br />
          <Link href="/profile">
            <Button variant="secondary" size="lg" className="">
              Real Word of the Day <FaExpand />
            </Button>
          </Link>{" "}
        </div>
        <div className="col-sm-6">
          <Container className="mt-5">
            <Link href="/profile">
              <Button variant="light" size="sm" className="">
                Dashboard
              </Button>
            </Link>{" "}
            <Link href="/statistics">
              <Button variant="secondary" size="sm">
                Statistics
              </Button>
            </Link>
          </Container>
          <Container className="mt-5 d-grid gap-2">
            <h1>Statistics </h1>
            <table className="Statistics">
              <thead>
                <tr>
                  <th scope="col"> {gamesPlayed}</th>
                  <th scope="col">
                    {" "}
                    {winPercentage} {`%`}{" "}
                  </th>
                  <th scope="col"> {user?.winStreak} </th>
                  <th scope="col"> {user?.longestWinStreak} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Played</td>
                  <td>Win %</td>
                  <td>Current Streak</td>
                  <td>Maximum Streak</td>
                </tr>
              </tbody>
            </table>
          </Container>
          <Container className="mt-5 d-grid gap-2">
            <h1> Guess Distribution </h1>
            <ProgressBar now={100 / 4} label={`1`} variant="success" />
            <ProgressBar now={0} label={`0`} variant="secondary" />
            <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
            <ProgressBar now={100 / 1} label={`4`} variant="secondary" />
            <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
            <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
          </Container>
        </div>
      </div>
    </div>
  );
}
