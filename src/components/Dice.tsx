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
import { B_LIGHT } from "@/styles/GlobalColor";

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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-normal);
  border-radius: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;

  width: 100%;
  height: 200px;

  @media screen and (min-width: 900px) {
    height: 230px;
  }
`;

const RollDiv = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 100%;
  height: 65%;

  @media screen and (min-width: 900px) {
    /* flex-direction: column; */
    justify-content: space-around;
    width: 300px;
    /* padding-top: 30%;
    padding-bottom: 30%; */
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
      <span
        style={{
          fontFamily: "comfortaa",
          color: B_LIGHT,
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Press to start
      </span>
      <hr style={{ borderWidth: 1, borderColor: B_LIGHT, width: "100%" }} />
      <RollDiv>
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
      </RollDiv>
    </Container>
  );
}
