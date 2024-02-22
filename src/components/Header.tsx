"use client";

import React, { useState } from "react";
import { styled } from "styled-components";
import {
  IconInfo,
  IconStats,
  IconLightmode,
  IconDarkmode,
} from "../../public/svgs/Index.ts";

const Wrapper = styled.div`
  margin-top: 4vh;
  margin-bottom: 5vh;
  height: 4vh;
  display: flex;
  flex-direction: "row";
  justify-content: "space-between";
  padding-left: 3%;
  padding-right: 3%;
  color: var(--color-icon);
`;

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Wrapper>
      <IconLightmode />
      <IconStats style={{ marginLeft: "auto", marginRight: "20px" }} />
      <IconInfo />
    </Wrapper>
  );
}
