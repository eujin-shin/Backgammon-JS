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
import { BEIGE, DARK } from "@/styles/GlobalColor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 350px;
  padding-top: 30%;
  padding-bottom: 30%;
  padding-inline: 20%;
  background-color: var(--color-normal);
  border-radius: 40px;
`;

export default function Dice() {
  const diceArr = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const [diceA, setDiceA] = useState({ color: BEIGE, value: 0 });
  const [diceB, setDiceB] = useState({ color: DARK, value: 0 });

  return (
    <Container>
      <FontAwesomeIcon
        icon={diceArr[diceA.value]}
        style={{ height: "30%", alignSelf: "flex-start", color: diceA.color }}
      />
      <FontAwesomeIcon
        icon={diceArr[diceB.value]}
        style={{ height: "30%", alignSelf: "flex-end", color: diceB.color }}
      />
    </Container>
  );
}
