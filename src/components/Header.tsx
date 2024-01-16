"use client";

import { useState } from "react";
import { IconLightmode } from "../../public/svgs/Index";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <IconLightmode />
    </div>
  );
}
