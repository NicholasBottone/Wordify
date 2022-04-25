import type { NextPage } from "next";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hello, world!</h1>
      <Link href="/about">About</Link>
    </Container>
  );
};

export default Home;
