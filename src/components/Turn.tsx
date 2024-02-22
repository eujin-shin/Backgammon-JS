import { styled } from "styled-components";
import Dice from "./Dice";

const PlayWrapper = styled.div`
  margin: 50px auto;

  @media screen and (min-width: 900px) {
  }
`;

export default function Turn() {
  return (
    <PlayWrapper>
      <Dice />
    </PlayWrapper>
  );
}
