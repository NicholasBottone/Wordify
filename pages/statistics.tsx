import React from "react";
import { Button, Container, ProgressBar, Image } from "react-bootstrap";
import Link from "next/link";
import { useUser } from "../lib/hooks/auth";
import { FaExpand } from "react-icons/fa";

export default function Profile() {
  const { user, isLoading } = useUser();
  console.log(user);
  console.log(isLoading);
  let { gamesWon }: any = 0;
  let { gamesPlayed }: any = 0;
  let { winPercentage }: any = 0;
  let { winStreak }: any = 0;
  let { maxStreak }: any = 0;
  let { guessDistribution }: any = 0;
  let { oneGuess }: any = 0;
  let { twoGuesses }: any = 0;
  let { threeGuesses }: any = 0;
  let { fourGuesses }: any = 0;
  let { fiveGuesses }: any = 0;
  let { sixGuesses }: any = 0;
  let { maxGuesses }: any = 0;
  let { times }: any = 0;
  if (user) {
    gamesWon = user?.gamesWon;
    gamesPlayed = user?.gamesPlayed;
    winPercentage = gamesPlayed != 0 ? (gamesWon / gamesPlayed) * 100 : 0;
    winStreak = user?.winStreak;
    maxStreak = user?.longestWinStreak;
    guessDistribution = user?.guessDistribution;
    oneGuess = guessDistribution[0];
    twoGuesses = guessDistribution[1];
    threeGuesses = guessDistribution[2];
    fourGuesses = guessDistribution[3];
    fiveGuesses = guessDistribution[4];
    sixGuesses = guessDistribution[5];
    times = user?.pastTimes;
    console.log(times);
    maxGuesses = Math.max.apply(null, guessDistribution);
    console.log(maxGuesses);
  }

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
          <Link href="/game">
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
                <tr id="statisticRow">
                  <th scope="col"> {gamesPlayed}</th>
                  <th scope="col">
                    {" "}
                    {winPercentage} {`%`}{" "}
                  </th>
                  <th scope="col"> {winStreak} </th>
                  <th scope="col"> {maxStreak} </th>
                </tr>
              </thead>
              <tbody>
                <tr id="statisticRow">
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
            <ProgressBar
              now={oneGuess == 0 ? 0 : 100 / (maxGuesses / oneGuess)}
              label={oneGuess}
              variant="success"
            />
            <ProgressBar
              now={twoGuesses == 0 ? 0 : 100 / (maxGuesses / twoGuesses)}
              label={twoGuesses}
              variant="secondary"
            />
            <ProgressBar
              now={threeGuesses == 0 ? 0 : 100 / (maxGuesses / threeGuesses)}
              label={threeGuesses}
              variant="secondary"
            />
            <ProgressBar
              now={fourGuesses == 0 ? 0 : 100 / (maxGuesses / fourGuesses)}
              label={fourGuesses}
              variant="secondary"
            />
            <ProgressBar
              now={fiveGuesses == 0 ? 0 : 100 / (maxGuesses / fiveGuesses)}
              label={fiveGuesses}
              variant="secondary"
            />
            <ProgressBar
              now={sixGuesses == 0 ? 0 : 100 / (maxGuesses / sixGuesses)}
              label={sixGuesses}
              variant="secondary"
            />
          </Container>
        </div>
      </div>
    </div>
  );
}
