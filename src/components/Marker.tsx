import styled, { CSSProperties } from "styled-components";
import { B_BEIGE, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { ownerType } from "./Spaces";

const MarkerDiv = styled.div`
  position: relative;
  flex-shrink: 1;
  display: flex;
  align-self: center;
  width: 27px;
  height: 27px;
  z-index: 1;
`;

const MarkerBack = styled.div<{ space: "up" | "down" | undefined }>`
  position: absolute;
  ${({ space }) => space === "up" && "top: 0;"}
  ${({ space }) => space === "down" && "bottom: 0;"}
  border-radius: 100%;
  width: 27px;
  aspect-ratio: 1;
  border-width: 1px;
`;

export default function Marker({
  owner,
  style,
  space,
}: {
  owner: ownerType;
  space?: "up" | "down";
  style?: CSSProperties;
}) {
  return (
    <MarkerDiv>
      <MarkerBack
        space={space}
        style={{
          backgroundColor: owner === "user" ? B_LIGHT : B_DARK,
          borderColor: owner === "user" ? B_DARK : B_LIGHT,
          ...style,
        }}
      />
    </MarkerDiv>
  );
}
