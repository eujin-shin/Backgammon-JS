import { styled } from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { BEIGE, DARK } from "@/styles/GlobalColor";

const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 100%;

  @media screen and (min-width: 900px) {
  }
`;

const RollButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-normal);
  border-radius: 40px;
  margin-top: 60px;

  width: 50%;
  height: 80px;
`;

export default function Turn() {
  const [diceA, setDiceA] = useState({ color: BEIGE, value: 0 });
  const [diceB, setDiceB] = useState({ color: DARK, value: 0 });

  const handleRoll = () => {
    setDiceA((prev) => {
      return { ...prev, value: Math.floor(Math.random() * 6) };
    });
    setDiceB((prev) => {
      return { ...prev, value: Math.floor(Math.random() * 6) };
    });
  };

  return (
    <PlayWrapper>
      <Dice diceA={diceA} diceB={diceB} />
      <RollButton onClick={handleRoll}>ROLL!</RollButton>
    </PlayWrapper>
  );
}
