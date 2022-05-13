import React from "react";
import { Button, Container, ProgressBar, Image } from "react-bootstrap";
import Link from "next/link";
import { useUser } from "../lib/hooks/auth";
import { FaExpand } from "react-icons/fa";
import { login } from "../lib/hooks/auth";

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
  let { averageTime }: any = parseInt("0");
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
  for (var i = 1; i < times.length; i++) {
    if (times[i]) {
      averageTime = parseInt(averageTime) + parseInt(times[i]);
    }
  }
  averageTime =
    averageTime == undefined ? 0 : Math.round(averageTime / times.length);

  } else {
    averageTime = 0;
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
              className="d-inline-block"
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
                    <th scope="col"> {averageTime} Sec. </th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="statisticRow">
                    <td scope="row">Played</td>
                    <td>Win %</td>
                    <td>Current Streak</td>
                    <td>Maximum Streak</td>
                    <td>Average Time</td>
                  </tr>
                </tbody>
              </table>
            </Container>
            <Container className="mt-5 d-grid gap-2">
              <h1> Guess Distribution </h1>
              <p>
                <h6 className="progress-label">1</h6>
                <ProgressBar
                  now={oneGuess == 0 ? 0 : 100 / (maxGuesses / oneGuess)}
                  label={oneGuess}
                  variant="success"
                />
              </p>
              <p>
                <h6 className="progress-label">2</h6>
                <ProgressBar
                  now={twoGuesses == 0 ? 0 : 100 / (maxGuesses / twoGuesses)}
                  label={twoGuesses}
                  variant="success"
                />
              </p>
              <p>
                <h6 className="progress-label">3</h6>
                <ProgressBar
                  now={
                    threeGuesses == 0 ? 0 : 100 / (maxGuesses / threeGuesses)
                  }
                  label={threeGuesses}
                  variant="success"
                />
              </p>
              <p>
                <h6 className="progress-label">4</h6>
                <ProgressBar
                  now={fourGuesses == 0 ? 0 : 100 / (maxGuesses / fourGuesses)}
                  label={fourGuesses}
                  variant="success"
                />
              </p>
              <p>
                <h6 className="progress-label">5</h6>
                <ProgressBar
                  now={fiveGuesses == 0 ? 0 : 100 / (maxGuesses / fiveGuesses)}
                  label={fiveGuesses}
                  variant="success"
                />
              </p>
              <p>
                <h6 className="progress-label">6</h6>
                <ProgressBar
                  now={sixGuesses == 0 ? 0 : 100 / (maxGuesses / sixGuesses)}
                  label={sixGuesses}
                  variant="success"
                />
              </p>
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
        {" "}
        Log In{" "}
      </Button>
    </Container>
  );
}
}
