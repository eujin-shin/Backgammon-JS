import { DefaultTheme } from "styled-components";
import { B_BEIGE, B_DARK, B_LIGHT } from "./GlobalColor";

export const lightTheme: DefaultTheme = {
  breakpoints: {
    small: "900px",
  },
  color: {
    background: B_LIGHT,
    point: B_BEIGE,
  },
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: {
    background: B_DARK,
    point: B_BEIGE,
  },
};
