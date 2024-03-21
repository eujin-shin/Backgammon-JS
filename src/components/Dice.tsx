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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { B_LIGHT } from "@/styles/GlobalColor";
import { useRecoilState } from "recoil";
import { phaseState, playState } from "@/store/atoms";

type diceObj = {
  value: number;
  color: any;
};
interface DiceProps {
  diceA: diceObj;
  diceB: diceObj;
  onClick: () => void;
  info: string;
  setInfo: Dispatch<SetStateAction<string>>;
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

export default function Dice({
  diceA,
  diceB,
  onClick,
  info,
  setInfo,
}: DiceProps) {
  const diceArr = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const [double, setDouble] = useState(false);
  const [phase, setPhase] = useRecoilState(phaseState);
  const [play, setPlay] = useRecoilState(playState);

  useEffect(() => {
    if (
      diceA.value === diceB.value &&
      phase !== "init" &&
      play.current === "rolled"
    )
      setTimeout(() => setDouble(true), 1000);
    else setDouble(false);
  }, [play.current]);

  useEffect(() => {
    if (double) {
      setInfo("Double!");
      setPlay((prev) => {
        return {
          ...prev,
          dices: [diceA.value, diceA.value, diceA.value, diceA.value],
        };
      });
    }
  }, [double]);

  const handleClick = () => {
    if (play.current === "waiting" && phase !== "com") onClick();
  };

  return (
    <Container onClick={handleClick}>
      <span
        style={{
          fontFamily: "comfortaa",
          color: B_LIGHT,
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        {info}
      </span>
      <hr style={{ borderWidth: 1, borderColor: B_LIGHT, width: "100%" }} />
      <RollDiv>
        <FontAwesomeIcon
          icon={diceArr[diceA.value]}
          size="4x"
          style={{
            alignSelf: "flex-start",
            color: diceA.color,
            opacity:
              play.current === "rolled" && play.dices[0] === -1 ? 0.4 : 1,
          }}
        />
        {double && (
          <FontAwesomeIcon
            icon={diceArr[diceA.value]}
            size="4x"
            style={{
              alignSelf: "flex-start",
              color: diceA.color,
              opacity:
                play.current === "rolled" && play.dices[2] === -1 ? 0.4 : 1,
            }}
          />
        )}
        <FontAwesomeIcon
          icon={diceArr[diceB.value]}
          size="4x"
          style={{
            alignSelf: "flex-end",
            color: diceB.color,
            opacity:
              play.current === "rolled" && play.dices[1] === -1 ? 0.4 : 1,
          }}
        />
        {double && (
          <FontAwesomeIcon
            icon={diceArr[diceB.value]}
            size="4x"
            style={{
              alignSelf: "flex-end",
              color: diceB.color,
              opacity:
                play.current === "rolled" && play.dices[3] === -1 ? 0.4 : 1,
            }}
          />
        )}
      </RollDiv>
    </Container>
  );
}
