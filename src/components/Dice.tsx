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
  onClick: () => void;
}

const Container = styled.div`
  display: flex;
  background-color: var(--color-normal);
  border-radius: 40px;

  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 200px;
    padding-top: 30%;
    padding-bottom: 30%;
    padding-inline: 20%;
  }
`;

export default function Dice({ diceA, diceB, onClick }: DiceProps) {
  const diceArr = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const double = false;

  return (
    <Container onClick={onClick}>
      <FontAwesomeIcon
        icon={diceArr[diceA.value]}
        size="4x"
        style={{ alignSelf: "flex-start", color: diceA.color }}
      />
      {double && (
        <FontAwesomeIcon
          icon={diceArr[diceA.value]}
          size="4x"
          style={{ alignSelf: "flex-start", color: diceA.color }}
        />
      )}
      <FontAwesomeIcon
        icon={diceArr[diceB.value]}
        size="4x"
        style={{ alignSelf: "flex-end", color: diceB.color }}
      />
      {double && (
        <FontAwesomeIcon
          icon={diceArr[diceB.value]}
          size="4x"
          style={{ alignSelf: "flex-end", color: diceB.color }}
        />
      )}
    </Container>
  );
}
