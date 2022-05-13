import { Container } from "react-bootstrap";
import Block from "./ProfileBoardBlock";

export default function ProfileBoardRow(
  rowCorrectness: [number, number, number, number, number]
) {
  let { one }: any = Block(rowCorrectness[0]);
  let { two }: any = Block(rowCorrectness[1]);
  let { three }: any = Block(rowCorrectness[2]);
  let { four }: any = Block(rowCorrectness[3]);
  let { five }: any = Block(rowCorrectness[4]);
  return (
    <Container>
      {one}
      {two}
      {three}
      {four}
      {five}
    </Container>
  );
}
