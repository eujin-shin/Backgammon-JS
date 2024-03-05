import { B_BEIGE, B_LIGHT } from "@/styles/GlobalColor";
import styled from "styled-components";

type ownerType = "com" | "user" | undefined;

interface SpaceProps {
  owner?: ownerType;
  count: number;
}

const StartDiv = styled.div<{ owner: ownerType }>`
  width: 44%;
  height: 28px;
  margin: 3px 30px;
  background-color: ${B_LIGHT};
  align-self: flex-end;
`;

const FinishDiv = styled.div<{ owner: ownerType }>`
  box-sizing: content-box;
  width: 29px;
  border-width: ${({ owner }) => (owner === "user" ? "15px" : "0px")} 0px
    ${({ owner }) => (owner === "com" ? "15px" : "0px")} 5px;
  border-color: ${B_BEIGE};
`;

const UpDiv = styled.div`
  border: 13.5px solid transparent;
  margin-right: 2px;
  border-bottom: 0px solid transparent;
  border-top: 100px solid ${B_BEIGE};
  background-color: ${B_LIGHT};
  padding-bottom: 15px;
`;

const DownDiv = styled(UpDiv)`
  border-top: 0px solid transparent;
  border-bottom: 100px solid ${B_BEIGE};
  padding-top: 15px;
  padding-bottom: 0;
`;

export function StartSpace({ owner, count }: SpaceProps) {
  return <StartDiv owner={owner}></StartDiv>;
}

export function FinishSpace({ owner, count }: SpaceProps) {
  return <FinishDiv owner={owner}></FinishDiv>;
}

export function UpSpace({ owner, count }: SpaceProps) {
  return <UpDiv></UpDiv>;
}

export function DownSpace({ owner, count }: SpaceProps) {
  return <DownDiv></DownDiv>;
}
