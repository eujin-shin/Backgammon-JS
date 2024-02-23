import { styled } from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { BEIGE, bBROWN, DARK, LIGHT } from "@/styles/GlobalColor";

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
  const [diceA, setDiceA] = useState({ color: LIGHT, value: 0 });
  const [diceB, setDiceB] = useState({ color: bBROWN, value: 0 });

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
      <RollButton onClick={handleRoll}>
        <span
          style={{
            fontFamily: "comfortaa",
            color: "#fff",
            fontWeight: 600,
            fontSize: 24,
          }}
        >
          ROLL!
        </span>
      </RollButton>
    </PlayWrapper>
  );
}
