import React from "react";
import {Container, ProgressBar} from "react-bootstrap"


export default function Profile() {
    return (
        <Container className="mt-5 text-center d-grid gap-2">
            <h1>Statistics</h1>
            <table className="Statistics">
                <thead>
                <tr>
                    <th scope="col">12</th>
                    <th scope="col">92</th>
                    <th scope="col">6</th>
                    <th scope="col">6</th>
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
            <Container className="mt-5 text-center d-grid gap-2">
                <h1> Guess Distribution </h1>
                <ProgressBar now={100 / 4} label={`1`} variant="success" />
                <ProgressBar now={0} label={`0`} variant="secondary" />
                <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
                <ProgressBar now={100 / 1} label={`4`} variant="secondary" />
                <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
                <ProgressBar now={100 / 4} label={`1`} variant="secondary" />
            </Container>
        </Container>
    )
}
