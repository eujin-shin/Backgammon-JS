import { phaseState } from "@/store/atoms";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { DownSpace, FinishSpace, StartSpace, UpSpace } from "./Spaces";
import { B_BEIGE, B_LIGHT } from "@/styles/GlobalColor";

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

  const handlePlay = () => {
    if (phase === "user") setPhase("com");
    else if (phase === "com") setPhase("user");
  };

  return (
    <Container onClick={handlePlay}>
      <FinishSpace owner="com" count={15} />
      <HalfDiv style={{ borderTopWidth: "5px" }}>
        <QuarterDiv id="second">
          <UpSpace count={15} owner="com" />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
        </QuarterDiv>
        <QuarterDiv id="first">
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <UpSpace count={0} />
          <StartSpace owner="com" count={5} />
        </QuarterDiv>
      </HalfDiv>
      <HalfDiv style={{ borderBottomWidth: "5px" }}>
        <QuarterDiv>
          <DownSpace count={4} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
        </QuarterDiv>
        <QuarterDiv>
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <DownSpace count={0} />
          <StartSpace owner="user" count={15} />
        </QuarterDiv>
      </HalfDiv>
      <FinishSpace owner="user" count={0} />
    </Container>
  );
}
