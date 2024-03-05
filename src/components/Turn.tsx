import { styled } from "styled-components";
import Dice from "./Dice";
import { useEffect, useState } from "react";
import { B_BEIGE, B_BROWN, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { CompProfile, UserProfile } from "./Profile";
import { useRecoilState } from "recoil";
import { phaseState } from "@/store/atoms";
import InfoModal from "./InfoModal";

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
  const [phase, setPhase] = useRecoilState(phaseState);
  const [modal, setModal] = useState("");
  const [diceA, setDiceA] = useState({ color: B_LIGHT, value: 0 });
  const [diceB, setDiceB] = useState({ color: B_DARK, value: 0 });

  const handleRoll = () => {
    const a = Math.floor(Math.random() * 6);
    const b = Math.floor(Math.random() * 6);
    setDiceA((prev) => {
      return { ...prev, value: a };
    });
    setDiceB((prev) => {
      return { ...prev, value: b };
    });
    if (phase === "init") {
      if (a === b) {
        setModal("Roll again!");
        setDiceA({ color: B_LIGHT, value: 0 });
        setDiceB({ color: B_DARK, value: 0 });
      } else if (a > b) {
        setModal("Computer first!");
        setPhase("com");
      } else if (b > a) {
        setModal("You first!");
        setPhase("user");
      }
    }
  };

  useEffect(() => {
    if (phase === "init") {
      setDiceA({ color: B_LIGHT, value: 0 });
      setDiceB({ color: B_DARK, value: 0 });
    } else if (phase === "user") {
      setDiceA({ color: B_DARK, value: 0 });
      setDiceB({ color: B_DARK, value: 0 });
    } else if (phase === "com") {
      setDiceA({ color: B_LIGHT, value: 0 });
      setDiceB({ color: B_LIGHT, value: 0 });
      setTimeout(handleRoll, 2000);
    }
  }, [phase]);

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
