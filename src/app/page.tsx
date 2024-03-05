"use client";

import Board from "@/components/Board";
import Turn from "@/components/Turn";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 90%;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Board />
      <Turn />
    </Wrapper>
  );
}
