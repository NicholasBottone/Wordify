import React from "react";
import {Button, Container, ProgressBar, Image } from "react-bootstrap";
import Link from "next/link"
import { FaExpand} from "react-icons/fa"

export default function Profile() {
return (
<div className="container">
  <div className="row"> 
  <div className="col-sm-6 text-center">
      <br/>
      <br/>
      <br/>
      <br/>
    <Image
        src="/pengu.jpeg"
        alt="Pengu uwu"
        width="200"
        height="200"
        className="d-inline-block"
        roundedCircle
      />
      <br/>
      <br/>
      <h4>Pingu the Penguin</h4>
      <br/>
      <br/>
      <Link href="/profile" >
            <Button variant ="secondary" size="lg" className="">
              Real Word of the Day <FaExpand />
            </Button> 
          </Link>{' '}
    </div>
      <div className="col-sm-6">
        <Container className="mt-5">
          <Link href="/profile" >
            <Button variant ="light" size="sm" className="">
              Dashboard
            </Button> 
          </Link>{' '}
          <Link href="/statistics">
            <Button variant ="secondary" size="sm">
              Statistics
            </Button>
          </Link>
        </Container>
        <Container className="mt-5 d-grid gap-2">
          <h1>Statistics 3</h1>
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
