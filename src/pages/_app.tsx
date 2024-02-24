import { Comfortaa, Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GlobalStyle from "../components/globalstyles";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
export const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap" });

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
