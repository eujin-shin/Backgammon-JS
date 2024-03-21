import { styled } from "styled-components";
import Dice from "./Dice";
import { useEffect, useState } from "react";
import { B_BEIGE, B_BROWN, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { CompProfile, UserProfile } from "./Profile";
import { useRecoilState } from "recoil";
import { phaseState, playState } from "@/store/atoms";
import InfoModal from "./InfoModal";

const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  width: 100%;

  @media screen and (min-width: 900px) {
    margin-left: 50px;
  }
`;

const RollButton = styled.div`
  display: none;

  align-items: center;
  justify-content: center;
  background-color: var(--color-normal);
  border-radius: 40px;
  margin-top: 30px;

  width: 60%;
  height: 60px;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export default function Turn() {
  const [phase, setPhase] = useRecoilState(phaseState);
  const [play, setPlay] = useRecoilState(playState);
  const [info, setInfo] = useState("Press to start");
  const [diceA, setDiceA] = useState({ color: B_DARK, value: 0 });
  const [diceB, setDiceB] = useState({ color: B_LIGHT, value: 0 });

  const handleRoll = () => {
    // if (play.current === "rolled") return;
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
        setInfo("Roll again!");
        setTimeout(() => {
          setDiceA({ color: B_DARK, value: 0 });
          setDiceB({ color: B_LIGHT, value: 0 });
        }, 2000);
      } else if (a > b) {
        setInfo("Computer first!");
        setTimeout(() => {
          setPhase("com");
        }, 2000);
      } else if (b > a) {
        setInfo("You first!");
        setTimeout(() => {
          setPhase("user");
        }, 2000);
      }
    } else {
      setInfo("Rolled!");
      setPlay({ current: "rolled", dices: [a, b] });
    }
  };

  useEffect(() => {
    if (phase === "init") {
      setDiceA({ color: B_DARK, value: 0 });
      setDiceB({ color: B_LIGHT, value: 0 });
    } else if (phase === "user") {
      setInfo("Your turn");
      setPlay({ current: "waiting", dices: [] });
      setDiceA({ color: B_LIGHT, value: 0 });
      setDiceB({ color: B_LIGHT, value: 0 });
    } else if (phase === "com") {
      setInfo("Computer's turn");
      setPlay({ current: "waiting", dices: [] });
      setDiceA({ color: B_DARK, value: 0 });
      setDiceB({ color: B_DARK, value: 0 });
      setTimeout(handleRoll, 2000);
    }
  }, [phase]);

  return (
    <PlayWrapper>
      <CompProfile />

      <Dice
        diceA={diceA}
        diceB={diceB}
        onClick={handleRoll}
        info={info}
        setInfo={setInfo}
      />
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
