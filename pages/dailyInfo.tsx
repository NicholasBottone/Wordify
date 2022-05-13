import { useDailyPuzzle } from "../lib/hooks/puzzle"; 
import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

export default function Summary() {
    let {puzzle, error, isLoading}: any = useDailyPuzzle();
    let word, one, two, three, four, five, six, max, attempts, avgTime, wins = 0;
    if (error) {
        return (<h1 className="text-centered">Looks like there was a problem fetching the summary data. Sorry!</h1>)
    }

    if (isLoading) {
        return (
            <Container className="text-centered">
                <br />
                <br />
                <br />
                <h1>loading...</h1>
            </Container>
        )
    } else {
        console.log(puzzle);
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
            <h1>Today's answer was {word}!</h1>
            <br />
            <h2>All User Summary</h2>
            <table className="Statistics">
              <thead>
                <tr>
                  <th scope="col">{attempts}</th>
                  <th scope="col">{wins}</th>
                  <th scope="col">{avgTime} Sec.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Total Attempts</td>
                  <td>Total Wins</td>
                  <td>Average Time</td>
                </tr>
              </tbody>
            </table>
            <Container className="mt-5 text-center d-grid gap-2">
            <h1> Guess Distribution </h1>
            <p>
                <h6 className="progress-label">1</h6>
                <ProgressBar
                now={one == 0 ? 0 : 100 / (max / one)}
                label={one}
                variant="success"
                />
            </p>
            <p>
                <h6 className="progress-label">2</h6>
                <ProgressBar
                now={two == 0 ? 0 : 100 / (max / two)}
                label={two}
                variant="success"
                />
            </p>
            <p>
                <h6 className="progress-label">3</h6>
                <ProgressBar
                now={
                    three == 0 ? 0 : 100 / (max / three)
                }
                label={three}
                variant="success"
                />
            </p>
            <p>
                <h6 className="progress-label">4</h6>
                <ProgressBar
                now={four == 0 ? 0 : 100 / (max / four)}
                label={four}
                variant="success"
                />
            </p>
            <p>
                <h6 className="progress-label">5</h6>
                <ProgressBar
                now={five == 0 ? 0 : 100 / (max / five)}
                label={five}
                variant="success"
                />
            </p>
            <p>
                <h6 className="progress-label">6</h6>
                <ProgressBar
                now={six == 0 ? 0 : 100 / (max / six)}
                label={six}
                variant="success"
                />
            </p>
            </Container>
            </Container>
        )
    }

  }