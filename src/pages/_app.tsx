import React from "react";
import { Comfortaa, Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import useTheme from "@/hooks/useTheme";
import { lightTheme, darkTheme } from "@/styles/theme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
export const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap" });

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const CustomThemeContext = React.createContext(defaultValue);

export default function MyApp({ Component, pageProps }: AppProps) {
  const themeProps = useTheme();
  return (
    <CustomThemeContext.Provider value={themeProps}>
      <ThemeProvider
        theme={themeProps.theme === "light" ? lightTheme : darkTheme}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
