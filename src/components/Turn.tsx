import { styled } from "styled-components";
import Dice from "./Dice";

const PlayWrapper = styled.div``;

export default function Turn() {
  return (
    <PlayWrapper>
      <Dice />
    </PlayWrapper>
  );
}
