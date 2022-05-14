import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useUser } from "../lib/hooks/auth";
import { useFriends } from "../lib/hooks/profile";
import IUser from "../types/IUser";

export default function Search() {
  const { user } = useUser();
  const { friends } = useFriends();

  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h1>You must be logged in to view this page</h1>
      </Container>
    );
  }

  if (!friends) {
    return (
      <Container className="text-center mt-5">
        <h1>Loading...</h1>
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h1>Friends</h1>
      <br />
      <h4>See how your friends are doing on Wordify lately.</h4>
      <h5>
        Add new friends by visiting the &quot;Search for Friends&quot; page.
      </h5>
      <br />
      <Row xs={1} md={2} lg={3} xl={4}>
        {friends.map((profile: IUser) => {
          let averageTime = 0;
          for (const time of profile.pastTimes) {
            if (time) {
              averageTime += time;
            }
          }
          averageTime /= profile.gamesWon;

          let averageGuesses = 0;
          for (let i = 0; i < profile.guessDistribution.length; i++) {
            averageGuesses += profile.guessDistribution[i] * (i + 1);
          }
          averageGuesses /= profile.gamesWon;

          const TodaysAttempt = profile.pastGuesses[0] ? (
            <>
              Today&apos;s Attempt: {profile.pastTimes[0]} seconds
              <br />
              {profile.pastGuesses[0].map((row: any, idx) => {
                return (
                  <span key={idx}>
                    {row.map((cell: any) => {
                      if (cell == 2) {
                        return "🟩";
                      } else if (cell == 1) {
                        return "🟨";
                      } else {
                        return "⬛️";
                      }
                    })}
                    <br />
                  </span>
                );
              })}
            </>
          ) : (
            <>No attempt yet today</>
          );

          return (
            <Col key={profile._id}>
              <Card>
                <Card.Img variant="top" src={profile.profilePicture} />
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>
                    {profile.gamesWon} games won, {profile.gamesPlayed} games
                    played
                    <br />
                    Currently on {profile.winStreak} day win streak
                    <br />
                    Average time to win: {Math.round(averageTime)} seconds
                    <br />
                    Average guesses to win: {Math.round(averageGuesses)}
                    <br />
                    {TodaysAttempt}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
