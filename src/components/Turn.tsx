import { styled } from "styled-components";
import Dice from "./Dice";
import { useState } from "react";
import { B_BEIGE, B_BROWN, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { CompProfile, UserProfile } from "./Profile";

const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 100%;

  @media screen and (min-width: 900px) {
  }
`;

const RollButton = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  background-color: var(--color-normal);
  border-radius: 40px;
  margin-top: 60px;

  width: 50%;
  height: 80px;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export default function Turn() {
  const [diceA, setDiceA] = useState({ color: B_LIGHT, value: 0 });
  const [diceB, setDiceB] = useState({ color: B_DARK, value: 0 });

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
      <CompProfile />

      <Dice diceA={diceA} diceB={diceB} onClick={handleRoll} />
      <UserProfile />
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
