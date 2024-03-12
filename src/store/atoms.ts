import { atom } from "recoil";

type phaseType = "init" | "user" | "com";

type playType = {
  current: "waiting" | "rolled";
  dices: number[];
};

export const phaseState = atom<phaseType>({
  key: "phase",
  default: "init",
});

export const playState = atom<playType>({
  key: "play",
  default: {
    current: "waiting",
    dices: [],
  },
});
