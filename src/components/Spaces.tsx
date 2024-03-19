import { B_BEIGE, B_BROWN, B_DARK, B_LIGHT, B_RED } from "@/styles/GlobalColor";
import styled from "styled-components";
import Marker from "./Marker";

export type ownerType = "com" | "user" | undefined;

export interface SpaceProps {
  owner?: ownerType;
  pressable?: boolean;
  count: number;
}

const FinishDiv = styled.div<{ owner: ownerType }>`
  width: 44%;
  height: 28px;
  margin: 3px 30px;
  background-color: ${B_BROWN};
  align-self: flex-end;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 1px;
  padding-inline-start: 15px;
`;

const StartDiv = styled.div<{ owner: ownerType }>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  background-color: ${B_BROWN};
  width: 29px;
  border-width: ${({ owner }) => (owner === "user" ? "15px" : "0px")} 0px
    ${({ owner }) => (owner === "com" ? "15px" : "0px")} 5px;
  flex-direction: ${({ owner }) =>
    owner === "com" ? "column" : "column-reverse"};
  border-color: ${B_BEIGE};
  ${({ owner }) =>
    owner === "com" ? "padding-bottom: 20px;" : "padding-top: 20px;"}
`;

const UpDiv = styled.div`
  position: relative;
  width: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const DownDiv = styled(UpDiv)`
  flex-direction: column-reverse;
  padding-top: 30px;
  padding-bottom: 0px;
`;

const UpBack = styled.div`
  position: absolute;
  border: 13.5px solid transparent;

  border-bottom: 0px solid transparent;
  border-top: 115px solid ${B_BROWN};
  /* background-color: ${B_LIGHT}; */
`;

const DownBack = styled(UpBack)`
  border-top: 0px solid transparent;
  border-bottom: 115px solid ${B_BROWN};
`;

export function FinishSpace({ owner, count, pressable }: SpaceProps) {
  return (
    <FinishDiv owner={owner}>
      {[...Array(count)].map((v, index) => (
        <Marker
          owner={owner}
          key={index}
          style={{
            borderColor: pressable ? B_RED : owner === "com" ? B_DARK : B_LIGHT,
            borderWidth: pressable ? 2 : 1,
          }}
        />
      ))}
    </FinishDiv>
  );
}

export function StartSpace({ owner, count, pressable }: SpaceProps) {
  return (
    <StartDiv owner={owner}>
      {[...Array(count)].map((v, index) => (
        <Marker
          owner={owner}
          key={index}
          style={
            owner === "com"
              ? {
                  top: 0,
                  borderColor: pressable ? B_RED : B_DARK,
                  borderWidth: pressable ? 2 : 1,
                }
              : {
                  bottom: 0,
                  borderColor: pressable ? B_RED : B_LIGHT,
                  borderWidth: pressable ? 2 : 1,
                }
          }
        />
      ))}
    </StartDiv>
  );
}

export function UpSpace({ owner, count, pressable }: SpaceProps) {
  return (
    <UpDiv>
      <UpBack />
      {[...Array(count)].map((v, index) => (
        <Marker
          owner={owner}
          key={index}
          style={{
            top: 0,
            borderColor: pressable ? B_RED : owner === "com" ? B_DARK : B_LIGHT,
            borderWidth: pressable ? 2 : 1,
          }}
        />
      ))}
    </UpDiv>
  );
}

export function DownSpace({ owner, count, pressable }: SpaceProps) {
  return (
    <DownDiv>
      <DownBack />
      {[...Array(count)].map((v, index) => (
        <Marker
          owner={owner}
          key={index}
          style={{
            bottom: 0,
            borderColor: pressable ? B_RED : owner === "com" ? B_DARK : B_LIGHT,
            borderWidth: pressable ? 2 : 1,
          }}
        />
      ))}
    </DownDiv>
  );
}
