import styled, { CSSProperties } from "styled-components";
import { B_BEIGE, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { ownerType } from "./Spaces";

const MarkerDiv = styled.div`
  position: relative;
  flex-shrink: 1;
  width: 25px;
  height: 25px;
  z-index: 1;
`;

const MarkerBack = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 100%;
  width: 25px;
  aspect-ratio: 1;
  border-width: 1px;
`;

export default function Marker({
  owner,
  style,
}: {
  owner: ownerType;
  style?: CSSProperties;
}) {
  return (
    <MarkerDiv>
      <MarkerBack
        style={{
          backgroundColor: owner === "com" ? B_LIGHT : B_DARK,
          borderColor: owner === "com" ? B_DARK : B_LIGHT,
          ...style,
        }}
      />
    </MarkerDiv>
  );
}
