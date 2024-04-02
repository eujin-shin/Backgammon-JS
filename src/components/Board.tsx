import { phaseState, playState } from "@/store/atoms";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import {
  DownSpace,
  FinishSpace,
  SpaceProps,
  StartSpace,
  UpSpace,
} from "./Spaces";
import { B_BEIGE, B_LIGHT } from "@/styles/GlobalColor";
import { useState } from "react";

const Container = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${B_BEIGE};
  border-radius: 40px;
  border-width: 5px;
  border-color: var(--color-normal);

  width: 400px;
  height: 400px;

  @media screen and (min-width: 900px) {
    width: 450px;
    height: 450px;
  }
`;

const HalfDiv = styled.div`
  width: 100%;
  height: 34%;
  background-color: ${B_LIGHT};
  border-color: ${B_BEIGE};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuarterDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Board() {
  const [phase, setPhase] = useRecoilState(phaseState);
  const [play, setPlay] = useRecoilState(playState);

  const initEndPoints: SpaceProps[] = [
    { count: 1, owner: "user" },
    { count: 15, owner: "com" },
  ];

  const initState: SpaceProps[] = [
    { count: 2, owner: "user" },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 5, owner: "com" },
    { count: 0 },
    { count: 3, owner: "com" },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 15, owner: "user" },
    { count: 5, owner: "com" },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 3, owner: "user" },
    { count: 0 },
    { count: 5, owner: "user" },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 2, owner: "com" },
  ];

  const [starts, setStarts] = useState<SpaceProps[]>(initEndPoints);
  const [finishes, setFinishes] = useState<SpaceProps[]>(initEndPoints);
  const [current, setCurrent] = useState<SpaceProps[]>(initState);

  // const ofUser = current.unshift(starts[0]);

  const handlePlay = () => {
    if (play.current !== "rolled") return;
    if (phase === "user") setPhase("com");
    else if (phase === "com") setPhase("user");
  };

  return (
    <Container onClick={handlePlay}>
      <FinishSpace owner="com" count={finishes[1].count} />
      <HalfDiv style={{ borderTopWidth: "5px" }}>
        <QuarterDiv id="second">
          <UpSpace {...current[11]} />
          <UpSpace {...current[10]} />
          <UpSpace {...current[9]} />
          <UpSpace {...current[8]} />
          <UpSpace {...current[7]} />
          <UpSpace {...current[6]} />
        </QuarterDiv>
        <QuarterDiv id="first">
          <UpSpace {...current[5]} />
          <UpSpace {...current[4]} />
          <UpSpace {...current[3]} />
          <UpSpace {...current[2]} />
          <UpSpace {...current[1]} />
          <UpSpace {...current[0]} />
          <StartSpace owner="user" count={starts[0].count} />
        </QuarterDiv>
      </HalfDiv>
      <HalfDiv style={{ borderBottomWidth: "5px" }}>
        <QuarterDiv>
          <DownSpace {...current[12]} />
          <DownSpace {...current[13]} />
          <DownSpace {...current[14]} />
          <DownSpace {...current[15]} />
          <DownSpace {...current[16]} />
          <DownSpace {...current[17]} />
        </QuarterDiv>
        <QuarterDiv>
          <DownSpace {...current[18]} />
          <DownSpace {...current[19]} />
          <DownSpace {...current[20]} />
          <DownSpace {...current[21]} />
          <DownSpace {...current[22]} />
          <DownSpace {...current[23]} />
          <StartSpace owner="com" count={starts[1].count} />
        </QuarterDiv>
      </HalfDiv>
      <FinishSpace owner="user" count={finishes[0].count} />
    </Container>
  );
}
