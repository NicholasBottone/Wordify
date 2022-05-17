import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDebouncedCallback } from "use-debounce";
import { useUser } from "../lib/hooks/auth";
import { searchProfiles, setFriend, useFriends } from "../lib/hooks/profile";
import IUser from "../types/IUser";

export default function Friends() {
  const { user } = useUser();
  const { friends } = useFriends();

  const [queriedProfiles, setQueriedProfiles] = React.useState<IUser[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const debounced = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
    if (value.length >= 2) {
      searchProfiles(value).then((profiles: IUser[]) => {
        setQueriedProfiles(profiles);
      });
    }
  }, 500);

  if (!user) {
    return (
      <Container className="text-center mt-5">
        <h1>You must be logged in to view the friends page</h1>
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

  const listToMap = searchQuery ? queriedProfiles : friends;

  return (
    <Container className="text-center mt-5">
      <h1>Friends</h1>
      <br />
      <h4>See how your friends are doing on Wordify lately.</h4>
      <h5>
        Add new friends by searching for user profiles by their first and/or
        last name.
      </h5>
      <br />
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={(e) => debounced(e.target.value)}
      />
      <br />
      <Row xs={1} md={2} lg={3} xl={4}>
        {listToMap.map((profile: IUser) => {
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
              {profile.pastTimes[0] && (
                <>
                  Today&apos;s Attempt: {profile.pastTimes[0]} seconds
                  <br />
                </>
              )}
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
                    Average guesses to win: {Math.round(averageGuesses)}
                    <br />
                    {TodaysAttempt}
                  </Card.Text>
                  {!isSelf && FriendButton}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
