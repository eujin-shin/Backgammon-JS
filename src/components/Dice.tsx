import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type diceObj = {
  value: number;
  color: any;
};
interface DiceProps {
  diceA: diceObj;
  diceB: diceObj;
}

const Container = styled.div`
  display: flex;
  background-color: var(--color-normal);
  border-radius: 40px;

  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 350px;
    padding-top: 30%;
    padding-bottom: 30%;
    padding-inline: 20%;
  }
`;

export default function Dice({ diceA, diceB }: DiceProps) {
  const diceArr = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  return (
    <Container>
      <FontAwesomeIcon
        icon={diceArr[diceA.value]}
        size="4x"
        style={{ alignSelf: "flex-start", color: diceA.color }}
      />
      <FontAwesomeIcon
        icon={diceArr[diceB.value]}
        size="4x"
        style={{ alignSelf: "flex-end", color: diceB.color }}
      />
    </Container>
  );
}
