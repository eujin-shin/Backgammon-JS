"use client";

import { useState } from "react";
import { IconInfo, IconLightmode, IconStats } from "../../public/svgs/Index";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        marginTop: "2vh",
        marginBottom: "2vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <IconLightmode />
      <IconStats style={{ marginLeft: "auto", marginRight: "20px" }} />
      <IconInfo />
    </div>
  );
}
