import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      small: string;
    };
    color: {
      background: string;
      point: string;
    };
  }
}
