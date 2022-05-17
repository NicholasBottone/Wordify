import { useDailyPuzzle } from "../lib/hooks/puzzle";
import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useUser } from "../lib/hooks/auth";

export default function Summary() {
  let { puzzle, error, isLoading }: any = useDailyPuzzle();
  let word,
    one,
    two,
    three,
    four,
    five,
    six,
    max,
    attempts,
    avgTime,
    wins = 0;
  const user = useUser();
  let pastGuess;
  if (error) {
    return (
      <Container className="py-5">
        <h1 className="text-center">
          You must be logged in to view the daily puzzle summary
        </h1>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container className="text-centered">
        <br />
        <br />
        <br />
        <h1>loading...</h1>
      </Container>
    );
  } else {
    if (user) {
      pastGuess = user.user?.pastGuesses[0];
      if (pastGuess) {
        word = puzzle?.word;
        one = puzzle?.guessDistribution[0];
        two = puzzle?.guessDistribution[1];
        three = puzzle?.guessDistribution[2];
        four = puzzle?.guessDistribution[3];
        five = puzzle?.guessDistribution[4];
        six = puzzle?.guessDistribution[5];
        max = Math.max.apply(null, puzzle?.guessDistribution);
        attempts = puzzle?.attempts;
        avgTime = puzzle?.averageTimeToWin;
        wins = puzzle?.wins;

        return (
          <Container className="mt-5 text-center d-grid gap-2">
            <h1>Today&apos;s answer was {word}!</h1>
            <br />
            <h2>All User Summary</h2>
            <Row
              style={{
                color: "#02c39a",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <Col>{attempts}</Col>
              <Col>{wins}</Col>
              <Col>{avgTime} sec</Col>
            </Row>
            <Row>
              <Col>Total Attempts</Col>
              <Col>Total Wins</Col>
              <Col>Average Time</Col>
            </Row>
            <Container className="mt-5 text-center d-grid gap-2">
              <h2>Guess Distribution</h2>
              <div>
                <span className="fs-6 progress-label">1</span>
                <ProgressBar
                  now={one == 0 ? 0 : 100 / (max / one)}
                  label={one}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">2</span>
                <ProgressBar
                  now={two == 0 ? 0 : 100 / (max / two)}
                  label={two}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">3</span>
                <ProgressBar
                  now={three == 0 ? 0 : 100 / (max / three)}
                  label={three}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">4</span>
                <ProgressBar
                  now={four == 0 ? 0 : 100 / (max / four)}
                  label={four}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">5</span>
                <ProgressBar
                  now={five == 0 ? 0 : 100 / (max / five)}
                  label={five}
                  variant="success"
                />
              </div>
              <div>
                <span className="fs-6 progress-label">6</span>
                <ProgressBar
                  now={six == 0 ? 0 : 100 / (max / six)}
                  label={six}
                  variant="success"
                />
              </div>
            </Container>
          </Container>
        );
      } else {
        return (
          <Container className="text-centered">
            <br />
            <br />
            <br />
            <h2>
              Looks like you have not completed today&apos;s puzzle yet.
              Complete the puzzle to access today&apos;s summary.
            </h2>
          </Container>
        );
      }
    } else {
      return (
        <Container className="text-centered">
          <h2>
            Looks like you have not completed today&apos;s puzzle yet. Complete
            to access this page!
          </h2>
        </Container>
      );
    }
  }
}
