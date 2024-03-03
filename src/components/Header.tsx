import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import {
  IconInfo,
  IconStats,
  IconLightmode,
  IconDarkmode,
} from "../../public/svgs/Index.ts";
import { B_BEIGE } from "@/styles/GlobalColor.ts";

const Wrapper = styled.div`
  margin-top: 4vh;
  margin-bottom: 5vh;
  height: 4vh;
  display: flex;
  flex-direction: "row";
  justify-content: "space-between";
  padding-left: 3%;
  padding-right: 3%;
  color: ${B_BEIGE};
`;

export default function Header() {
  return (
    <Wrapper>
      {/* {theme === "light" ? <IconDarkmode /> : <IconLightmode />} */}
      <IconStats style={{ marginLeft: "auto", marginRight: "20px" }} />
      <IconInfo />
    </Wrapper>
  );
}
