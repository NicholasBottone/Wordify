import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDebouncedCallback } from "use-debounce";
import { useUser } from "../lib/hooks/auth";
import { searchProfiles, setFriend } from "../lib/hooks/profile";
import IUser from "../types/IUser";

export default function Search() {
  const { user } = useUser();

  const [queriedProfiles, setQueriedProfiles] = React.useState<IUser[]>([]);

  const debounced = useDebouncedCallback((value: string) => {
    if (value.length >= 2) {
      searchProfiles(value).then((profiles: IUser[]) => {
        setQueriedProfiles(profiles);
      });
    }
  }, 500);

  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h1>You must be logged in to view this page</h1>
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h1>Search for Friends</h1>
      <br />
      <h4>Search for user profiles by their first and/or last name.</h4>
      <br />
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={(e) => debounced(e.target.value)}
      />
      <br />
      <Row xs={1} md={2} lg={3} xl={4}>
        {queriedProfiles.map((profile: IUser) => {
          let averageTime = 0;
          let wins = 0;
          for (const time of profile.pastTimes) {
            if (time) {
              averageTime += time;
              wins++;
            }
          }
          averageTime /= wins;

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

          const isSelf = profile._id === user._id;
          const isFriend = (user.friends as string[]).includes(profile._id);

          const FriendButton = isFriend ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setFriend(profile._id, false);
              }}
            >
              Unfriend
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setFriend(profile._id, true)}
            >
              Add Friend
            </Button>
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
                    {TodaysAttempt}
                  </Card.Text>
                  {FriendButton}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
