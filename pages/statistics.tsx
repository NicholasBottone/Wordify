import React from "react";
import {
  Button,
  Container,
  ProgressBar,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import { useUser, login } from "../lib/hooks/auth";

export default function Profile() {
  const { user } = useUser();

  let gamesWon = 0;
  let gamesPlayed = 0;
  let winPercentage = 0;
  let winStreak = 0;
  let maxStreak = 0;
  let guessDistribution: number[] = [];
  let oneGuess = 0;
  let twoGuesses = 0;
  let threeGuesses = 0;
  let fourGuesses = 0;
  let fiveGuesses = 0;
  let sixGuesses = 0;
  let maxGuesses = 0;
  let times: (number | null)[] = [];
  let averageTime = 0;
  if (user) {
    gamesWon = user?.gamesWon;
    gamesPlayed = user?.gamesPlayed;
    winPercentage =
      gamesPlayed != 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
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
    maxGuesses = Math.max.apply(null, guessDistribution);

    // for the calculation of average time.
    if (times.length > 0) {
      if (times[0]) {
        averageTime = times[0];
      }
      for (let i = 1; i < times.length; i++) {
        if (times[i]) {
          averageTime = averageTime + (times[i] || 0);
        }
      }
      averageTime =
        averageTime == undefined ? 0 : Math.round(averageTime / times.length);
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
            <h4>{user?.name}</h4>
            {user?.bio}
          </div>
          <div className="col-sm-6">
            <Container className="mt-5 text-center">
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
            <Container className="mt-5 d-grid gap-2 text-center">
              <h1>Your Statistics</h1>
              <Row
                style={{
                  color: "#02c39a",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                <Col>{gamesPlayed}</Col>
                <Col>
                  {winPercentage}
                  {`%`}
                </Col>
                <Col>{averageTime} sec</Col>
              </Row>
              <Row>
                <Col>Played</Col>
                <Col>Win %</Col>
                <Col>Average Time</Col>
              </Row>
              <Row
                style={{
                  color: "#02c39a",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                <Col>{winStreak}</Col>
                <Col>{maxStreak}</Col>
              </Row>
              <Row>
                <Col>Current Streak</Col>
                <Col>Maximum Streak</Col>
              </Row>
            </Container>
            <Container className="mt-5 d-grid gap-2">
              <h1> Guess Distribution </h1>
              <div>
                <span className="fs-6 progress-label">1</span>
                <ProgressBar
                  now={oneGuess == 0 ? 0 : 100 / (maxGuesses / oneGuess)}
                  label={oneGuess}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">2</span>
                <ProgressBar
                  now={twoGuesses == 0 ? 0 : 100 / (maxGuesses / twoGuesses)}
                  label={twoGuesses}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">3</span>
                <ProgressBar
                  now={
                    threeGuesses == 0 ? 0 : 100 / (maxGuesses / threeGuesses)
                  }
                  label={threeGuesses}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">4</span>
                <ProgressBar
                  now={fourGuesses == 0 ? 0 : 100 / (maxGuesses / fourGuesses)}
                  label={fourGuesses}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">5</span>
                <ProgressBar
                  now={fiveGuesses == 0 ? 0 : 100 / (maxGuesses / fiveGuesses)}
                  label={fiveGuesses}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">6</span>
                <ProgressBar
                  now={sixGuesses == 0 ? 0 : 100 / (maxGuesses / sixGuesses)}
                  label={sixGuesses}
                  variant="success"
                />
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
      <h4> Log in to access the statistics page!</h4>
      <br />
      <Button variant="light" size="lg" onClick={login}>
        Log In
      </Button>
    </Container>
  );
}
