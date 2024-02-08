"use client";

import Board from "@/components/Board";
import Turn from "@/components/Turn";
import Image from "next/image";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
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
